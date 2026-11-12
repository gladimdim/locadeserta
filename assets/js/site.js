/**
 * Loca Deserta Universe — Client-Side Language Detection, Theme & UI Controller
 * Zero external dependencies.
 * Default language: English (en). Auto-switches to Ukrainian (uk) if browser locale is uk* and no manual choice is stored.
 */
(function () {
  var STORAGE_LANG_KEY = 'ld_lang_pref';
  var STORAGE_THEME_KEY = 'ld_theme_pref';

  var currentLang = document.documentElement.getAttribute('lang') || 'en';
  var isUkPage = currentLang.indexOf('uk') === 0;
  var altEnUrl = document.documentElement.getAttribute('data-alt-en') || '/';
  var altUkUrl = document.documentElement.getAttribute('data-alt-uk') || '/uk/';

  // 1. Check URL query parameter ?lang=en or ?lang=uk
  var params = new URLSearchParams(window.location.search);
  var queryLang = params.get('lang');
  if (queryLang === 'en' || queryLang === 'uk') {
    try {
      localStorage.setItem(STORAGE_LANG_KEY, queryLang);
    } catch (e) {}
  }

  // 2. Automatic locale detection (skip for search crawlers / bots so both EN and UK pages are indexed cleanly)
  var ua = navigator.userAgent || '';
  var isBot = /bot|googlebot|crawler|spider|robot|crawling|bingbot|gptbot|claudebot|perplexity|applebot|facebookexternalhit/i.test(ua);

  if (!isBot) {
    var savedLang = null;
    try {
      savedLang = localStorage.getItem(STORAGE_LANG_KEY);
    } catch (e) {}

    var targetLang = savedLang;
    if (!targetLang) {
      var browserLangs = navigator.languages ? navigator.languages : [navigator.language || 'en'];
      var prefersUk = browserLangs.some(function (l) {
        return l && l.toLowerCase().indexOf('uk') === 0;
      });
      targetLang = prefersUk ? 'uk' : 'en';
    }

    if (targetLang === 'uk' && !isUkPage && altUkUrl && window.location.pathname !== altUkUrl) {
      window.location.replace(altUkUrl + window.location.hash);
      return;
    } else if (targetLang === 'en' && isUkPage && altEnUrl && window.location.pathname !== altEnUrl) {
      window.location.replace(altEnUrl + window.location.hash);
      return;
    }
  }

  // 3. Theme initialization
  try {
    var savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    // Decorative footage: load only when motion is wanted and the video is visible.
    var motionButton = document.getElementById('motion-toggle');
    var ambientVideos = Array.from(document.querySelectorAll('[data-ambient-video]'));
    if (motionButton && ambientVideos.length) {
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      var desktopVideo = window.matchMedia('(min-width: 981px)');
      var connection = navigator.connection;
      var motionPaused = reducedMotion.matches || !!(connection && connection.saveData);
      try {
        motionPaused = motionPaused || localStorage.getItem('ld_motion_paused') === 'true';
      } catch (e) {}

      function updateMotionButton() {
        motionButton.setAttribute('aria-pressed', String(motionPaused));
        motionButton.querySelector('[data-motion-label]').textContent = isUkPage
          ? (motionPaused ? 'Увімкнути відео' : 'Призупинити відео')
          : (motionPaused ? 'Play videos' : 'Pause videos');
        motionButton.querySelector('.motion-icon').textContent = motionPaused ? '▶' : 'Ⅱ';
      }

      function updateVideo(video) {
        var shouldPlay = !motionPaused && !document.hidden && video.dataset.visible !== 'false'
          && (!video.hasAttribute('data-desktop-only') || desktopVideo.matches);
        if (!shouldPlay) {
          video.pause();
          return;
        }
        if (!video.getAttribute('src')) video.src = video.dataset.src;
        video.muted = true;
        var playRequest = video.play();
        if (playRequest) playRequest.catch(function (error) {
          // A visibility change can interrupt play normally; blocked autoplay needs a click.
          if (error.name === 'NotAllowedError') {
            motionPaused = true;
            ambientVideos.forEach(function (item) { item.pause(); });
            updateMotionButton();
          }
        });
      }

      function updateVideos() {
        updateMotionButton();
        ambientVideos.forEach(updateVideo);
      }

      motionButton.hidden = false;
      motionButton.addEventListener('click', function () {
        motionPaused = !motionPaused;
        try { localStorage.setItem('ld_motion_paused', String(motionPaused)); } catch (e) {}
        updateVideos();
      });
      document.addEventListener('visibilitychange', updateVideos);
      desktopVideo.addEventListener('change', updateVideos);
      reducedMotion.addEventListener('change', function () {
        if (reducedMotion.matches) motionPaused = true;
        updateVideos();
      });
      if (connection && connection.addEventListener) connection.addEventListener('change', function () {
        if (connection.saveData) motionPaused = true;
        updateVideos();
      });
      if ('IntersectionObserver' in window) {
        var videoObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            entry.target.dataset.visible = String(entry.isIntersecting);
            updateVideo(entry.target);
          });
        }, { threshold: 0.05 });
        ambientVideos.forEach(function (video) {
          video.dataset.visible = 'false';
          videoObserver.observe(video);
        });
      }
      updateVideos();
    }

    // Language Switcher Buttons
    var langLinks = document.querySelectorAll('[data-set-lang]');
    langLinks.forEach(function (el) {
      el.addEventListener('click', function () {
        var chosen = el.getAttribute('data-set-lang');
        try {
          localStorage.setItem(STORAGE_LANG_KEY, chosen);
        } catch (e) {}
      });
    });

    // Theme Toggle
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      function updateThemeButton() {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        themeBtn.querySelector('span').textContent = isLight ? '🌚' : '🌞';
        var label = isUkPage
          ? (isLight ? 'Увімкнути темну тему' : 'Увімкнути світлу тему')
          : (isLight ? 'Switch to dark theme' : 'Switch to light theme');
        themeBtn.setAttribute('aria-label', label);
        themeBtn.title = label;
      }
      updateThemeButton();
      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        var next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        updateThemeButton();
        try {
          localStorage.setItem(STORAGE_THEME_KEY, next);
        } catch (e) {}
      });
    }

    // Mobile Menu Toggle
    var menuBtn = document.getElementById('mobile-menu-btn');
    var navLinks = document.getElementById('nav-links');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
    }

    // Category Filter Tabs for Games
    var filterTabs = document.querySelectorAll('[data-filter]');
    var gameCards = document.querySelectorAll('[data-category]');
    if (filterTabs.length > 0 && gameCards.length > 0) {
      filterTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var filter = tab.getAttribute('data-filter');
          filterTabs.forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');

          gameCards.forEach(function (card) {
            var cats = (card.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || cats.indexOf(filter) !== -1) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    // Lightbox for Gallery Images
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.getElementById('lightbox-close');
    var zoomables = document.querySelectorAll('[data-lightbox]');

    if (lightbox && lightboxImg && zoomables.length > 0) {
      zoomables.forEach(function (item) {
        item.addEventListener('click', function () {
          var src = item.getAttribute('data-lightbox') || item.getAttribute('src');
          if (src) {
            lightboxImg.setAttribute('src', src);
            lightbox.classList.add('open');
          }
        });
      });

      var closeBox = function () {
        lightbox.classList.remove('open');
        lightboxImg.setAttribute('src', '');
      };

      if (lightboxClose) lightboxClose.addEventListener('click', closeBox);
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeBox();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeBox();
      });
    }
  });
})();
