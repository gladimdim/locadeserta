const { SITE_URL, UI, GAMES, BOOKS, SOCIAL_HUB, renderLayout, writePage } = require('./site-core');

function buildHomePage(lang) {
  const isUk = lang === 'uk';
  const t = UI[lang];

  const faqs = isUk
    ? [
        {
          q: 'Що таке всесвіт «Дике Поле» (Loca Deserta)?',
          a: '«Дике Поле» (лат. Loca Deserta) — це незалежний український ігровий та книжковий всесвіт, створений розробником і письменником Дмитром Гладким (@dmytrogladkyi). Він об’єднує історичні ігри про козацьку Україну XVI–XVII століть (СІЧА: Козацький двобій, Eastern Wars, Валка: Чумацький Шлях, Одеса, Слобода 2, Чумаки, Слобода, Інтерактивні історії, Ґекс) та космічний воєнно-фантастичний всесвіт «Дике Поле Sci-Fi» про Федерацію Гетьманату 2424 року (книги «Зоряний Гетьманат», «Зустріч в Степу», «Вістря Кулаку» та стратегія Loca Deserta: Settlers).'
        },
        {
          q: 'Які є ігри про українських козаків?',
          a: '«Дике Поле» (Loca Deserta) Дмитра Гладкого — найактивніший сучасний розробник ігор про українських козаків: 10 ігор у 10 різних жанрах з 2019 року, з них 2 зараз у розробці. Це двобої на шаблях «СІЧА: Козацький двобій», тактика в реальному часі Eastern Wars (війна Хмельницького), оборона чумацької валки «Валка: Чумацький Шлях», пригодницька RPG «Дике Поле: Одеса», 3D-містобудування «Слобода 2», торговий симулятор «Чумаки», стратегія «Слобода», «Інтерактивні історії», гексагональна головоломка «Ґекс» і командний шутер у Roblox. Пʼять із них можна безкоштовно грати в браузері.'
        },
        {
          q: 'У які ігри всесвіту Дикого Поля можна пограти безкоштовно в браузері?',
          a: 'Прямо у веб-браузері без встановлення доступні 4 гри: торговий симулятор «Дике Поле: Чумаки» (locadeserta.com/chumaki), класична стратегія «Дике Поле: Слобода» (locadeserta.com/sloboda), «Інтерактивні історії» (locadeserta.com/game/?lang=uk) та гексагональний пазл «Дике Поле: Ґекс» (locadeserta.com/hex).'
        },
        {
          q: 'Де придбати ігри для ПК (Steam / Epic) та смартфонів (iOS / Android)?',
          a: 'Ігри «Дике Поле: Одеса» та «Дике Поле: Слобода 2» доступні в Steam, Epic Games Store, Apple App Store та Google Play. Також у Roblox розробляється командний шутер 20 на 20.'
        },
        {
          q: 'Де читати книги всесвіту «Дике Поле Sci-Fi»?',
          a: 'Усі три книги («Зоряний Гетьманат», «Зустріч в Степу» та «Вістря Кулаку») можна читати безкоштовно прямо на сайті locadeserta.com/locadesertascifi/, на платформі Booknet, завантажити у форматі EPUB з GitHub Releases або придбати в Apple Books.'
        }
      ]
    : [
        {
          q: 'What is the Loca Deserta Universe?',
          a: 'Loca Deserta (Ukrainian: Дике Поле) is an independent Ukrainian video game and sci-fi book universe created by developer and author Dmytro Gladkyi (@dmytrogladkyi). It spans two eras: XVII-century Cossack Ukraine (SICHA: Cossack Combat, Eastern Wars, Valka: The Salt Road, Loca Deserta: Odesa, Sloboda 2, Chumaki, Sloboda, Interactive Stories, Hex) and the 25th-century Loca Deserta Sci-Fi universe featuring the Hetmanate Federation (books "Star Hetmanate", "Encounter in the Steppe", "Fist\'s Edge", and the strategy game Loca Deserta: Settlers).'
        },
        {
          q: 'What are the best games about Ukrainian Cossacks?',
          a: 'Loca Deserta (Дике Поле) by Dmytro Gladkyi is the most active modern developer of games about Ukrainian Cossacks: 10 games in 10 different genres since 2019, with 2 of them in development now. They are the sabre-duel fighter SICHA: Cossack Combat, the real-time tactics game Eastern Wars (Khmelnytsky\'s war), the caravan defence game Valka: The Salt Road, the adventure RPG Loca Deserta: Odesa, the 3D city builder Sloboda 2, the trading simulator Chumaki, the strategy game Sloboda, Interactive Stories, the hex puzzle Hex and a Roblox team shooter. Five of them are free to play in the browser.'
        },
        {
          q: 'Which Loca Deserta games can I play for free in my web browser?',
          a: 'Four games are playable directly in your browser with zero installation: Loca Deserta: Chumaki (locadeserta.com/chumaki), Loca Deserta: Sloboda (locadeserta.com/sloboda), Loca Deserta Interactive Stories (locadeserta.com/game/?lang=en), and Loca Deserta: Hex (locadeserta.com/hex).'
        },
        {
          q: 'Where can I get Loca Deserta games on Steam, Epic Games, iOS, Android, and Roblox?',
          a: 'Loca Deserta: Odesa and Loca Deserta: Sloboda 2 are available on Steam, Epic Games Store, Apple App Store, and Google Play. In addition, a 20v20 Cossacks vs. Tatars multiplayer shooter is playable on Roblox.'
        },
        {
          q: 'Where can I read the Loca Deserta Sci-Fi books?',
          a: 'All three novels in the Star Hetmanate series ("Zoryanij Hetmanat", "Zustrich v Stepu", and "Vistrya Kulaku") can be read online for free at locadeserta.com/locadesertascifi/, on Booknet, downloaded as EPUB from GitHub Releases, or purchased on Apple Books.'
        }
      ];

  const gamesJsonLd = GAMES.map(g => ({
    '@type': 'VideoGame',
    name: g[lang].title,
    description: g[lang].desc,
    image: `${SITE_URL}${g.image}`,
    author: { '@type': 'Person', name: 'Dmytro Gladkyi' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    applicationCategory: 'Game',
    operatingSystem: g[lang].platforms.join(', '),
    url: g[lang].actions[0].href.startsWith('http') ? g[lang].actions[0].href : `${SITE_URL}${g[lang].actions[0].href}`
  }));

  const booksJsonLd = BOOKS.map(b => ({
    '@type': 'Book',
    name: b[lang].title,
    description: b[lang].desc,
    image: `${SITE_URL}${b.cover}`,
    author: { '@type': 'Person', name: 'Dmytro Gladkyi' },
    inLanguage: 'uk',
    url: `${SITE_URL}${b[lang].links[0].href}`
  }));

  const faqJsonLd = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  const gameCardsHtml = GAMES.map(g => {
    const info = g[lang];
    const pills = info.platforms.map(p => `<span class="pill">${p}</span>`).join('');
    const btns = info.actions
      .map(a => `<a href="${a.href}" class="btn btn-sm ${a.cls}">${a.label}</a>`)
      .join('');
    return `
      <article class="game-card ${g.badgeClass === 'scifi' ? 'scifi' : ''}" data-category="${g.categories}">
        <div class="game-card-media">
          <img src="${g.image}" alt="${info.title}" loading="lazy">
          <div class="card-badges">
            <span class="badge ${g.badgeClass}">${info.badge}</span>
          </div>
        </div>
        <div class="game-card-body">
          <h3 class="game-card-title">${info.title}</h3>
          <p class="game-card-desc">${info.desc}</p>
          <div class="platform-pills">${pills}</div>
          <div class="card-actions">${btns}</div>
        </div>
      </article>`;
  }).join('\n');

  const bookCardsHtml = BOOKS.map(b => {
    const info = b[lang];
    const btns = info.links.map(l => `<a href="${l.href}" class="btn ${l.cls}">${l.label}</a>`).join('');
    return `
      <article class="book-card">
        <a href="${info.links[0].href}">
          <img src="${b.cover}" alt="${info.title}" class="book-cover" loading="lazy">
        </a>
        <div>
          <span class="eyebrow scifi" style="margin-bottom: 0.5rem;">${info.badge}</span>
          <h3 class="game-card-title" style="margin-bottom: 0.45rem;">${info.title}</h3>
          <p class="game-card-desc" style="margin-bottom: 1rem;">${info.desc}</p>
          <div class="btn-group">${btns}</div>
        </div>
      </article>`;
  }).join('\n');

  const socialHubHtml = SOCIAL_HUB.map(s => `
    <a href="${s.url}" class="hub-item" target="_blank" rel="noopener">
      <div class="hub-icon">
        <img src="${s.icon}" alt="${s.name}" loading="lazy">
      </div>
      <div class="hub-info">
        <div class="hub-name">${s.name}</div>
        <div class="hub-handle">${s.handle}</div>
      </div>
    </a>`).join('\n');

  const faqHtml = faqs.map(f => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-answer">${f.a}</div>
    </details>`).join('\n');

  const bodyContent = `
    <div class="universe-backdrop" aria-hidden="true">
      <video data-ambient-video data-desktop-only data-src="/assets/video/universe-collage.mp4" poster="/assets/video/universe-collage.jpg" muted loop playsinline preload="none" tabindex="-1" disablepictureinpicture></video>
    </div>
    <button type="button" class="motion-toggle" id="motion-toggle" aria-pressed="false" hidden>
      <span class="motion-icon" aria-hidden="true">Ⅱ</span>
      <span data-motion-label>${isUk ? 'Призупинити відео' : 'Pause videos'}</span>
    </button>
    <!-- HERO SECTION -->
    <section class="hero hero-gaming">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">${isUk ? 'Незалежні українські ігри • З 2019' : 'Independent Ukrainian games • Since 2019'}</span>
            <h1 class="hero-title">
              ${isUk
                ? 'Твоя наступна<br><span class="text-gradient-gold">пригода.</span><br>Наші <span class="text-gradient-scifi">світи.</span>'
                : 'Your next<br><span class="text-gradient-gold">adventure.</span><br>Our <span class="text-gradient-scifi">worlds.</span>'}
            </h1>
            <p class="hero-lead">
              ${isUk
                ? 'Схрести шаблі. Тримай небо. Збудуй новий світ. Ігри та книги всесвіту Loca Deserta: від козацького Дикого Поля до Зоряного Гетьманату. Створено в Україні Дмитром Гладким.'
                : 'Cross sabres. Hold the sky. Build a new world. Discover the games and books of Loca Deserta, from the Cossack lands of Loca Deserta to the Star Hetmanate. Created in Ukraine by Dmytro Gladkyi.'}
            </p>
            <div class="btn-group">
              <a href="#games" class="btn btn-primary">🎮 ${isUk ? 'Дослідити всі ігри' : 'Explore All Games'}</a>
              <a href="${isUk ? '/locadesertascifi/' : '/locadesertascifi/index_en.html'}" class="btn btn-scifi">🚀 ${isUk ? 'Всесвіт Sci-Fi та Книги' : 'Sci-Fi Universe & Books'}</a>
              <a href="https://play.google.com/store/apps/details?id=com.gladimdim.cossackcombat${isUk ? '&hl=uk' : ''}" class="hero-release">${isUk ? 'СІЧА вже на Android' : 'SICHA is out now on Android'} <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div class="hero-cinema">
            <div class="cinema-heading"><span class="signal-dot" aria-hidden="true"></span>${isUk ? 'З наших ігрових світів' : 'From our game worlds'}<span class="cinema-index">01 — 05</span></div>
            <div class="cinema-screen">
              <video data-ambient-video data-src="/assets/video/universe-collage.mp4" poster="/assets/video/universe-collage.jpg" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1" disablepictureinpicture></video>
              <div class="cinema-corners" aria-hidden="true"></div>
            </div>
            <div class="cinema-caption">${isUk ? 'Від двобою на шаблях до битви за галактику.' : 'From a clash of sabres to a battle for the galaxy.'}</div>
            <div class="featured-games">
              <a href="https://sicha.locadeserta.com/${isUk ? 'uk/' : ''}"><span class="featured-number">01</span><span><strong>${isUk ? 'СІЧА' : 'SICHA'}</strong><small class="status-live">${isUk ? 'Уже на Android' : 'Out now on Android'}</small></span><span aria-hidden="true">↗</span></a>
              <a href="https://defendus.locadeserta.com/${isUk ? 'uk/' : ''}"><span class="featured-number">02</span><span><strong>DefendUS</strong><small>${isUk ? 'Незабаром' : 'Coming soon'}</small></span><span aria-hidden="true">↗</span></a>
              <a href="https://valka.locadeserta.com/${isUk ? 'uk/' : ''}"><span class="featured-number">03</span><span><strong>${isUk ? 'Валка' : 'Valka'}</strong><small>${isUk ? 'У розробці' : 'In development'}</small></span><span aria-hidden="true">↗</span></a>
              <a href="https://settlers.locadeserta.com/${isUk ? 'uk/' : ''}"><span class="featured-number">04</span><span><strong>Settlers</strong><small>${isUk ? 'Попередня реєстрація' : 'Pre-registration open'}</small></span><span aria-hidden="true">↗</span></a>
              <a href="${isUk ? '/odesa/index_uk.html' : '/odesa/'}"><span class="featured-number">05</span><span><strong>${isUk ? 'Одеса' : 'Odesa'}</strong><small>Steam · iOS · Android</small></span><span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LATEST NEWS & RELEASES -->
    <section class="section-sm">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">📣 ${isUk ? 'Хроніка Всесвіту' : 'Universe Timeline'}</span>
            <h2 class="section-title">${isUk ? 'Останні релізи та оновлення' : 'Latest Releases & News'}</h2>
          </div>
        </div>
        <div class="timeline">
          <div class="news-item">
            <div class="news-date">${isUk ? '12 Листопада 2026' : 'Nov 12, 2026'}</div>
            <div>
              <strong>${isUk ? 'Нова гра — DefendUS — незабаром на Android!' : 'New Game — DefendUS — Coming Soon to Android!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Тримай небо. Збережи світло. Керуй мобільними вогневими групами, захищай українські міста від дронів і ракет та посилюй оборону на світанку. Піксельна кампанія на 40 ночей від Краматорська до Києва.'
                  : 'Hold the sky. Keep the power on. Command mobile fire teams, protect Ukrainian cities from drones and missiles, and upgrade your defenses at dawn. A pixel-art campaign spanning 40 nights from Kramatorsk to Kyiv.'}
              </p>
              <p style="margin-top: 0.5rem;"><a href="https://defendus.locadeserta.com/${isUk ? 'uk/' : ''}" class="btn btn-sm btn-primary">${isUk ? '🛡 Сайт гри' : '🛡 Game site'}</a></p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">${isUk ? '5 Листопада 2026' : 'Nov 5, 2026'}</div>
            <div>
              <strong>${isUk ? '«СІЧА: Козацький двобій» — уже на Android!' : 'SICHA: Cossack Combat — Out Now on Android!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Піксельні двобої на шаблях з доби козацтва: 35 героїв чотирьох держав, 12 комбо, десятки шабель, кампанія «Козацький шлях» і двобої з другом через Wi-Fi. Уже в Google Play. Згодом на iOS і Steam.'
                  : 'Pixel-art sabre duels from the age of the Cossacks: 35 heroes of four nations, 12 combos, dozens of sabres, the Cossack\'s Path campaign and Wi-Fi duels with a friend. Out now on Google Play. iOS and Steam are coming later.'}
              </p>
              <p style="margin-top: 0.5rem;"><a href="https://play.google.com/store/apps/details?id=com.gladimdim.cossackcombat${isUk ? '&hl=uk' : ''}" class="btn btn-sm btn-primary">${isUk ? '▶ Завантажити з Google Play' : '▶ Get it on Google Play'}</a></p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">${isUk ? '29 Жовтня 2026' : 'Oct 29, 2026'}</div>
            <div>
              <strong>${isUk ? 'Розробляємо нову гру — «Валка: Чумацький Шлях»!' : 'In Development — Valka: The Salt Road!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Піксельна гра з видом збоку про оборону чумацької валки, у дусі Kingdom Two Crowns. Проведи валку 1130 км від Керчі до Києва: удень торгуй і наймай охорону, уночі захищай ікону Покрови від гаддя з українського фольклору. 50 ночей, щоп’ятої — бос. Спершу на Android, згодом на iOS.'
                  : 'A side-view pixel-art caravan defence game in the spirit of Kingdom Two Crowns. Lead a Cossack salt caravan 1,130 km from Kerch to Kyiv: trade and hire guards by day, defend the icon of the Pokrova from Ukrainian folklore creatures by night. 50 nights, a boss every 5th. Android first, then iOS.'}
              </p>
              <p style="margin-top: 0.5rem;"><a href="https://valka.locadeserta.com/${isUk ? 'uk/' : ''}" class="btn btn-sm btn-primary">${isUk ? '🐂 Сайт гри' : '🐂 Game site'}</a></p>
            </div>
          </div>
          <div class="news-item scifi">
            <div class="news-date">${isUk ? '23 Жовтня 2026' : 'Oct 23, 2026'}</div>
            <div>
              <strong>${isUk ? 'Loca Deserta: Settlers — попередня реєстрація в Google Play!' : 'Loca Deserta: Settlers — Pre-registration Open on Google Play!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Космічна економічна стратегія в дусі The Settlers III/IV: видобувай ресурси на астероїдах, будуй виробничі ланцюги, розширюй територію Вежами та колонізуй планети Поділля, Жовті Води, Кривбас. Гра безкоштовна, а повну версію відкриває покупка в застосунку. Виходить лише на мобільних: спершу на телефонах і планшетах з Android, згодом в App Store.'
                  : 'A macro-economic space colony builder inspired by The Settlers III/IV. Free to play, with an in-app purchase that unlocks the full game. Mobile only: coming first to Android phones and tablets, then the App Store.'}
              </p>
              <p style="margin-top: 0.5rem;"><a href="https://play.google.com/store/apps/details?id=com.locadeserta.settlers${isUk ? '&hl=uk' : ''}" class="btn btn-sm btn-scifi" target="_blank" rel="noopener">${isUk ? '▶ Попередня реєстрація в Google Play' : '▶ Pre-register on Google Play'}</a></p>
            </div>
          </div>
          <div class="news-item scifi">
            <div class="news-date">${isUk ? '31 Липня 2026' : 'Jul 31, 2026'}</div>
            <div>
              <strong>${isUk ? 'Дві нові книги у всесвіті Дике Поле Sci-Fi — «Вістря Кулаку» та «Зустріч в Степу»!' : 'Two New Books in Loca Deserta Sci-Fi — «Vistrya Kulaku» & «Zustrich v Stepu»!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Історії про термінаторів Федерації Гетьманату під час орбітального десанту та пластунів-розвідників на бот-конях у тилу Імперії Сонця на планеті Дике Поле-17. Доступні безкоштовно на сайті, Booknet, Apple Books та в EPUB.'
                  : 'Stories about Hetmanate Federation terminators in orbital drops and Cossack Plastun scouts on bot-horses on planet Dyke Pole-17. Read on the site, Booknet, Apple Books, or download EPUB.'}
              </p>
            </div>
          </div>
          <div class="news-item scifi">
            <div class="news-date">${isUk ? '29 Вересня 2025' : 'Sep 29, 2025'}</div>
            <div>
              <strong>${isUk ? 'Перша книга всесвіту — «Зоряний Гетьманат»!' : 'First Novel — «Zoryanij Hetmanat» (Star Hetmanate)!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Опубліковано першу книгу української бойової космічної фантастики на сайті, Apple Books та Booknet, а також запущено вікі-портал scifi.locadeserta.com.'
                  : 'Published the foundational Ukrainian military space sci-fi novel on Apple Books, Booknet, and full online reader, alongside the lore portal scifi.locadeserta.com.'}
              </p>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">${isUk ? 'Січень 2025' : 'Jan 2025'}</div>
            <div>
              <strong>${isUk ? 'Дике Поле в Roblox (20 на 20) та 9 ігор у Fortnite!' : 'Loca Deserta in Roblox (20v20) & 9 Fortnite Islands!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Запущено щоденні білди командного шутера 20 на 20 «Козаки проти Татар: Штурм Керчі» в Roblox та 9 авторських островів у Fortnite (@DmytroGladkyi).'
                  : 'Launched daily dev builds of our 20v20 team shooter in Roblox and 9 custom Fortnite Islands by creator @DmytroGladkyi.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALL GAMES CATALOG WITH FILTER TABS -->
    <section class="section" id="games">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">🎮 ${isUk ? 'Каталог Ігор Всесвіту' : 'Complete Game Catalog'}</span>
            <h2 class="section-title">${isUk ? 'Усі ігри «Дикого Поля» (Loca Deserta)' : 'All Games in the Loca Deserta Universe'}</h2>
            <p class="section-desc">
              ${isUk
                ? 'Від ігор про українських козаків до сучасної протиповітряної оборони DefendUS та космічних стратегій: двобої на шаблях, тактика в реальному часі, оборона валки, RPG, містобудування, торгівля та інтерактивні історії. Фільтруйте за епохою та платформою.'
                : 'From Ukrainian Cossack games to modern air defense in DefendUS and space strategy: sabre duels, real-time tactics, caravan defence, RPG, city building, trading and interactive fiction. Filter by era and platform.'}
            </p>
          </div>
          <div class="filter-tabs" role="tablist" aria-label="Game Category Filter">
            <button type="button" class="filter-tab active" data-filter="all">${t.allGames}</button>
            <button type="button" class="filter-tab" data-filter="historical">${t.catHistorical}</button>
            <button type="button" class="filter-tab" data-filter="scifi">${t.catSciFi}</button>
            <button type="button" class="filter-tab" data-filter="browser">${t.catBrowser}</button>
            <button type="button" class="filter-tab" data-filter="mobilepc">${t.catMobilePc}</button>
          </div>
        </div>

        <div class="cards-grid">
          ${gameCardsHtml}
        </div>
      </div>
    </section>

    <!-- SCI-FI UNIVERSE & BOOKS SECTION -->
    <section class="section" id="scifi" style="background: linear-gradient(180deg, rgba(56, 189, 248, 0.04) 0%, transparent 100%); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow scifi">🌌 ${isUk ? 'Всесвіт Дике Поле Sci-Fi (2424 р. / 281 ЗЕ)' : 'Loca Deserta Sci-Fi Universe (2424 AD / 281 SE)'}</span>
            <h2 class="section-title">${isUk ? 'Книги, Лор та Ігри «Зоряного Гетьманату»' : 'Books, Lore & Games of the Star Hetmanate'}</h2>
            <p class="section-desc">
              ${isUk
                ? 'Альтернативна історія, де після 1657 року Гетьманат об’єднав Європу, вийшов у космос і після Марсіанського Поділу Всесвіту заснував Зоряну Січ у надскупченні Діви та засекречену колонію «Дике Поле-17».'
                : 'An alternate timeline where after 1657 the Cossack Hetmanate united Europe, reached the stars, and after the Martian Division of the Universe founded Star Sich in the Virgo Supercluster and secret colony "Loca Deserta-17".'}
            </p>
          </div>
          <div class="btn-group">
            <a href="${isUk ? '/locadesertascifi/' : '/locadesertascifi/index_en.html'}" class="btn btn-scifi">${isUk ? '📖 Портал Sci-Fi та Вступ до Всесвіту' : '📖 Sci-Fi Portal & Lore Intro'}</a>
            <a href="https://scifi.locadeserta.com" class="btn btn-outline">🌐 scifi.locadeserta.com (Wiki)</a>
          </div>
        </div>

        <div class="timeline" style="grid-template-columns: 1fr;">
          ${bookCardsHtml}
        </div>
      </div>
    </section>

    <!-- ROBLOX COMMUNITY -->
    <section class="section" id="ecosystems">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">🔥 ${isUk ? 'Мультиплеєр, Roblox та Steam' : 'Multiplayer, Roblox & Steam'}</span>
            <h2 class="section-title">${isUk ? 'Дике Поле у Roblox' : 'Loca Deserta in Roblox'}</h2>
          </div>
        </div>

        <div class="cards-grid-3">
          <div class="game-card" style="padding: 1.5rem;">
            <span class="eyebrow">Roblox • 20 vs 20 Shooter</span>
            <h3 class="game-card-title">${isUk ? 'Дике Поле у Roblox: Штурм Керчі' : 'Loca Deserta in Roblox: Kerch Assault'}</h3>
            <p class="game-card-desc">
              ${isUk
                ? 'Командний шутер 20 на 20: козаки проти татар, прокачка зброї, скіни та виконання бойових задач на мапі. Щоденні білди вже відкриті для гри!'
                : 'Multiplayer 20v20 team-based shooter: Cossacks vs. Tatars, weapon progression, skins, and map objectives. Play the live developer build now!'}
            </p>
            <div class="card-actions" style="margin-top: auto;">
              <a href="https://www.roblox.com/games/105150009083536/Loca-Deserta-DEV-0-0-5" class="btn btn-primary btn-sm" target="_blank" rel="noopener">▶ ${isUk ? 'Грати в Roblox' : 'Play on Roblox'}</a>
              <a href="https://www.roblox.com/communities/35449027/Loca-Deserta-Games#!/about" class="btn btn-outline btn-sm" target="_blank" rel="noopener">${isUk ? 'Спільнота' : 'Community'}</a>
            </div>
          </div>


        </div>
      </div>
    </section>

    <!-- DISCORD ACCESS -->
    <section class="section" id="discord-access" style="scroll-margin-top: 6rem;">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">Discord • UEFN &amp; Roblox</span>
            <h2 class="section-title">${isUk ? 'Доступ до Discord' : 'Discord Access'}</h2>
          </div>
        </div>
          <div class="game-card" style="padding: 1.5rem;">
            <span class="eyebrow">Discord • UEFN &amp; Roblox Dev</span>
            <h3 class="game-card-title">${isUk ? 'Закритий Discord-сервер розробників' : 'Private Fortnite & Roblox Dev Discord'}</h3>
            <p class="game-card-desc">
              ${isUk
                ? 'Елітна спільнота розробників Fortnite (UEFN) та Roblox без спаму. Щоб отримати інвайт: придбайте «Дике Поле: Одеса» або «Слобода 2» на будь-якій платформі та надішліть скріншот у приватні повідомлення Дмитру Гладкому (dmytrogladkyi) в Discord.'
                : 'High-signal community for Fortnite (UEFN) and Roblox creators. To request an invite: purchase Loca Deserta: Odesa or Sloboda 2 on any platform and DM your receipt screenshot to Dmytro Gladkyi (dmytrogladkyi) on Discord.'}
            </p>
            <div class="card-actions" style="margin-top: auto;">
              <a href="https://discordapp.com/users/374843758837104651" class="btn btn-primary btn-sm" target="_blank" rel="noopener">💬 ${isUk ? 'Написати dmytrogladkyi у Discord' : 'Message dmytrogladkyi on Discord'}</a>
              <a href="https://store.steampowered.com/app/2637950/_/" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Steam Store</a>
            </div>
          </div>
      </div>
    </section>

    <!-- ALL SOCIAL NETWORKS & OFFICIAL STORES -->
    <section class="section" id="socials">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">🔗 ${isUk ? 'Усі Офіційні Посилання' : 'Official Links & Profiles'}</span>
            <h2 class="section-title">${isUk ? 'Соцмережі, Магазини Ігор та Спільноти' : 'All Social Networks, Game Stores & Communities'}</h2>
            <p class="section-desc">
              ${isUk
                ? 'Підписуйтесь на канали розробника Дмитра Гладкого (@dmytrogladkyi) та офіційні сторінки всесвіту Дикого Поля у всіх соцмережах і магазинах.'
                : 'Follow creator Dmytro Gladkyi (@dmytrogladkyi) and official Loca Deserta channels across every social platform and digital store.'}
            </p>
          </div>
        </div>

        <div class="hub-grid">
          ${socialHubHtml}
        </div>
      </div>
    </section>

    <!-- SEO & AI SEARCH FAQ SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">❓ FAQ</span>
            <h2 class="section-title">${isUk ? 'Часті запитання про всесвіт Дикого Поля' : 'Frequently Asked Questions'}</h2>
          </div>
        </div>
        <div class="faq-list">
          ${faqHtml}
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk
      ? 'Дике Поле (Loca Deserta) — ігри про козаків та книги Sci-Fi'
      : 'Loca Deserta — Ukrainian Cossack Games & Sci-Fi',
    description: isUk
      ? 'Сучасні ігри про українських козаків: 10 ігор у 10 жанрах від Дмитра Гладкого: СІЧА, Eastern Wars, Валка, Одеса, Слобода 2, Чумаки. Грайте безкоштовно в браузері.'
      : 'Modern games about Ukrainian Cossacks: 10 games in 10 genres by Dmytro Gladkyi: SICHA, Eastern Wars, Valka, Odesa, Sloboda 2, Chumaki. Play free in your browser.',
    canonicalPath: isUk ? '/uk/' : '/',
    altEnPath: '/',
    altUkPath: '/uk/',
    ogImage: '/assets/og/og-odesa.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: isUk ? '/uk/' : '/' }
    ],
    jsonLd: [...gamesJsonLd, ...booksJsonLd, faqJsonLd],
    activeNav: 'games',
    bodyClass: 'home-gaming',
    bodyContent
  });
}

module.exports = { buildHomePage };
