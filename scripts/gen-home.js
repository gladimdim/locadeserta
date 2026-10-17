const { SITE_URL, UI, GAMES, BOOKS, SOCIAL_HUB, renderLayout, writePage } = require('./site-core');

function buildHomePage(lang) {
  const isUk = lang === 'uk';
  const t = UI[lang];

  const faqs = isUk
    ? [
        {
          q: 'Що таке всесвіт «Дике Поле» (Loca Deserta)?',
          a: '«Дике Поле» (лат. Loca Deserta) — це незалежний український ігровий та книжковий всесвіт, створений розробником і письменником Дмитром Гладким (@dmytrogladkyi). Він об’єднує історичні ігри про козацьку Україну XVI–XVII століть (Одеса, Слобода 2, Чумаки, Слобода, Інтерактивні історії, Ґекс) та космічний воєнно-фантастичний всесвіт «Дике Поле Sci-Fi» про Федерацію Гетьманату 2424 року (книги «Зоряний Гетьманат», «Зустріч в Степу», «Вістря Кулаку» та стратегія Loca Deserta: Settlers).'
        },
        {
          q: 'У які ігри всесвіту Дикого Поля можна пограти безкоштовно в браузері?',
          a: 'Прямо у веб-браузері без встановлення доступні 5 ігор: космічна стратегія Loca Deserta: Settlers (settlers.locadeserta.com), торговий симулятор «Дике Поле: Чумаки» (locadeserta.com/chumaki), класична стратегія «Дике Поле: Слобода» (locadeserta.com/sloboda), «Інтерактивні історії» (locadeserta.com/game/?lang=uk) та гексагональний пазл «Дике Поле: Ґекс» (locadeserta.com/hex).'
        },
        {
          q: 'Де придбати ігри для ПК (Steam / Epic) та смартфонів (iOS / Android)?',
          a: 'Ігри «Дике Поле: Одеса» та «Дике Поле: Слобода 2» доступні в Steam, Epic Games Store, Apple App Store та Google Play. Також у магазині Fortnite за тегом автора @dmytrogladkyi опубліковано 9 островів, а в Roblox розробляється командний шутер 20 на 20.'
        },
        {
          q: 'Де читати книги всесвіту «Дике Поле Sci-Fi»?',
          a: 'Усі три книги («Зоряний Гетьманат», «Зустріч в Степу» та «Вістря Кулаку») можна читати безкоштовно прямо на сайті locadeserta.com/locadesertascifi/, на платформі Booknet, завантажити у форматі EPUB з GitHub Releases або придбати в Apple Books.'
        }
      ]
    : [
        {
          q: 'What is the Loca Deserta (Wild Field) Universe?',
          a: 'Loca Deserta (Ukrainian: Дике Поле / Wild Field) is an independent Ukrainian video game and sci-fi book universe created by developer and author Dmytro Gladkyi (@dmytrogladkyi). It spans two eras: XVII-century Cossack Ukraine (Loca Deserta: Odesa, Sloboda 2, Chumaki, Sloboda, Interactive Stories, Hex) and the 25th-century Loca Deserta Sci-Fi universe featuring the Hetmanate Federation (books "Star Hetmanate", "Encounter in the Steppe", "Fist\'s Edge", and the strategy game Loca Deserta: Settlers).'
        },
        {
          q: 'Which Loca Deserta games can I play for free in my web browser?',
          a: 'Five games are playable directly in your browser with zero installation: Loca Deserta: Settlers (settlers.locadeserta.com), Loca Deserta: Chumaki (locadeserta.com/chumaki), Loca Deserta: Sloboda (locadeserta.com/sloboda), Loca Deserta Interactive Stories (locadeserta.com/game/?lang=en), and Loca Deserta: Hex (locadeserta.com/hex).'
        },
        {
          q: 'Where can I get Loca Deserta games on Steam, Epic Games, iOS,Android, Fortnite, and Roblox?',
          a: 'Loca Deserta: Odesa and Loca Deserta: Sloboda 2 are available on Steam, Epic Games Store, Apple App Store, and Google Play. In addition, 9 custom Fortnite Islands are published under creator code @dmytrogladkyi, and a 20v20 Cossacks vs. Tatars multiplayer shooter is playable on Roblox.'
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
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div>
            <span class="eyebrow">⚔️ ${isUk ? 'Український Ігровий та Книжковий Всесвіт' : 'Ukrainian Game & Sci-Fi Book Universe'}</span>
            <h1 class="hero-title">
              ${isUk
                ? 'Всесвіт <span class="text-gradient-gold">Дикого Поля</span> та <span class="text-gradient-scifi">Зоряного Гетьманату</span>'
                : 'The <span class="text-gradient-gold">Loca Deserta</span> &amp; <span class="text-gradient-scifi">Star Hetmanate</span> Universe'}
            </h1>
            <p class="hero-lead">
              ${isUk
                ? 'Від козацьких степів, слобід, чумацьких ватаг і розбудови Одеси XVII століття — до орбітальних десантів Федерації Гетьманату 2424 року. Створено Дмитром Гладким (@dmytrogladkyi).'
                : 'From XVII-century Cossack steppes, Chumak trade caravans, and settling Khadjibey-Odesa — to orbital drops of the Hetmanate Federation in 2424 AD. Created by Dmytro Gladkyi (@dmytrogladkyi).'}
            </p>
            <div class="btn-group">
              <a href="#games" class="btn btn-primary">🎮 ${isUk ? 'Дослідити всі ігри' : 'Explore All Games'}</a>
              <a href="${isUk ? '/locadesertascifi/' : '/locadesertascifi/index_en.html'}" class="btn btn-scifi">🚀 ${isUk ? 'Всесвіт Sci-Fi та Книги' : 'Sci-Fi Universe & Books'}</a>
              <a href="https://settlers.locadeserta.com" class="btn btn-outline">🪐 ${isUk ? 'Грати в Settlers (Браузер)' : 'Play Settlers (Browser)'}</a>
            </div>

            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-val">7+</div>
                <div class="stat-label">${isUk ? 'Оригінальних ігор на ПК, Мобільних і в Браузері' : 'Standalone PC, Mobile & Web Games'}</div>
              </div>
              <div class="stat-card">
                <div class="stat-val cyan">3</div>
                <div class="stat-label">${isUk ? 'Книги у всесвіті Дике Поле Sci-Fi' : 'Novels in the Loca Deserta Sci-Fi Series'}</div>
              </div>
              <div class="stat-card">
                <div class="stat-val">9</div>
                <div class="stat-label">${isUk ? 'Островів у Fortnite + Шутер у Roblox' : 'Fortnite Islands + Roblox 20v20 Shooter'}</div>
              </div>
              <div class="stat-card">
                <div class="stat-val cyan">100%</div>
                <div class="stat-label">${isUk ? 'Український колорит, озвучка та лор' : 'Authentic Ukrainian Lore & Voice Acting'}</div>
              </div>
            </div>
          </div>

          <div class="hero-showcase">
            <a href="${isUk ? '/odesa/index_uk.html' : '/odesa/'}" class="showcase-card">
              <img src="/odesa/images/secret_place.jpg" alt="Loca Deserta: Odesa">
              <div class="showcase-card-body">
                <span class="showcase-tag">XVII Century • Steam &amp; Mobile</span>
                <div class="showcase-title">${isUk ? 'Дике Поле: Одеса' : 'Loca Deserta: Odesa'}</div>
              </div>
            </a>
            <a href="https://settlers.locadeserta.com" class="showcase-card scifi">
              <img src="/locadesertascifi/images/cover.jpg" alt="Loca Deserta: Settlers & Star Hetmanate">
              <div class="showcase-card-body">
                <span class="showcase-tag scifi">Sci-Fi 2424 AD • Web &amp; PC</span>
                <div class="showcase-title">Loca Deserta: Settlers</div>
              </div>
            </a>
            <a href="${isUk ? '/sloboda2/index_uk.html' : '/sloboda2/'}" class="showcase-card">
              <img src="/sloboda2/images/thumbnail.png" alt="Loca Deserta: Sloboda 2">
              <div class="showcase-card-body">
                <span class="showcase-tag">3D City Builder</span>
                <div class="showcase-title">${isUk ? 'Дике Поле: Слобода 2' : 'Loca Deserta: Sloboda 2'}</div>
              </div>
            </a>
            <a href="/locadesertascifi/books/Vistrya_Kulaku.html" class="showcase-card scifi">
              <img src="/locadesertascifi/images/vistrya_kulaku_cover.jpg" alt="Vistrya Kulaku Sci-Fi Book">
              <div class="showcase-card-body">
                <span class="showcase-tag scifi">${isUk ? 'Нова книга 2026' : 'New Book 2026'}</span>
                <div class="showcase-title">${isUk ? '«Вістря Кулаку»' : '«Vistrya Kulaku»'}</div>
              </div>
            </a>
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
            <div class="news-date">${isUk ? '14 Липня 2026' : 'Jul 14, 2026'}</div>
            <div>
              <strong>${isUk ? 'Реліз гри Loca Deserta: Settlers!' : 'Loca Deserta: Settlers Released!'}</strong>
              <p style="color: var(--text-secondary); margin-top: 0.25rem; font-size: 0.94rem;">
                ${isUk
                  ? 'Космічна економічна стратегія в дусі The Settlers III/IV: видобувай ресурси на астероїдах, будуй виробничі ланцюги, розширюй територію Вежами та колонізуй планети Поділля, Жовті Води, Кривбас. Грай у браузері на settlers.locadeserta.com або завантажуй для Windows, macOS і Linux.'
                  : 'A macro-economic space colony builder inspired by The Settlers III/IV. Play free in your browser at settlers.locadeserta.com or download native builds for Windows, macOS, and Linux.'}
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
                ? 'Згруповано за епохами та платформами: обирайте історичні стратегії про козаччину XVII ст., космічну економіку або ігри, доступні прямо у веб-браузері.'
                : 'Grouped by era and platform: filter between XVII-century Cossack strategy & RPG titles, Sci-Fi colony builders, or instant web-browser games.'}
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
                : 'An alternate timeline where after 1657 the Cossack Hetmanate united Europe, reached the stars, and after the Martian Division of the Universe founded Star Sich in the Virgo Supercluster and secret colony "Wild Field-17".'}
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

    <!-- FORTNITE, ROBLOX, STEAM & DISCORD COMMUNITY -->
    <section class="section" id="ecosystems">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="eyebrow">🔥 ${isUk ? 'Мультиплеєр, UEFN, Roblox та Steam' : 'Multiplayer, UEFN, Roblox & Steam'}</span>
            <h2 class="section-title">${isUk ? 'Екосистеми Fortnite, Roblox та Закрита Спільнота' : 'Fortnite Islands, Roblox Shooter & Developer Community'}</h2>
          </div>
        </div>

        <div class="cards-grid-3">
          <div class="game-card scifi" style="padding: 1.5rem;">
            <span class="eyebrow scifi">Fortnite Creator • @DmytroGladkyi</span>
            <h3 class="game-card-title">${isUk ? '9 Островів у Fortnite' : '9 Fortnite Islands'}</h3>
            <p class="game-card-desc">
              ${isUk
                ? 'Шукайте у Fortnite за кодом автора @DmytroGladkyi! Вже опубліковано 9 різноманітних ігор, включно з картами у всесвіті Loca Deserta Sci-Fi.'
                : 'Search in Fortnite by creator @DmytroGladkyi! 9 published islands featuring combat and exploration across the Loca Deserta & Sci-Fi universes.'}
            </p>
            <img src="/images/Fortnite_Games.png" alt="Fortnite Games by DmytroGladkyi" style="border-radius: 10px; margin-bottom: 1rem; height: 160px; object-fit: cover;">
            <a href="https://www.fortnite.com/@dmytrogladkyi" class="btn btn-scifi btn-sm" target="_blank" rel="noopener">Fortnite.com/@dmytrogladkyi ↗</a>
          </div>

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

          <div class="game-card" id="discord-access" style="padding: 1.5rem;">
            <span class="eyebrow">Discord • UEFN &amp; Roblox Dev</span>
            <h3 class="game-card-title">${isUk ? 'Закритий Discord-сервер розробників' : 'Private Fortnite & Roblox Dev Discord'}</h3>
            <p class="game-card-desc">
              ${isUk
                ? 'Елітна спільнота розробників Fortnite (UEFN) та Roblox без спаму. Щоб отримати інвайт: придбайте «Дике Поле: Одеса» або «Слобода 2» на будь-якій платформі та надішліть скріншот у приватні повідомлення Дмитру Гладкому (dmytrogladkyi) в Discord.'
                : 'High-signal community for Fortnite (UEFN) and Roblox creators. To request an invite: purchase Loca Deserta: Odesa or Sloboda 2 on any platform and DM your receipt screenshot to Dmytro Gladkyi (dmytrogladkyi) on Discord.'}
            </p>
            <div class="card-actions" style="margin-top: auto;">
              <a href="https://discordapp.com/users/374843758837104651" class="btn btn-primary btn-sm" target="_blank" rel="noopener">💬 DM dmytrogladkyi on Discord</a>
              <a href="https://store.steampowered.com/app/2637950/_/" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Steam Store</a>
            </div>
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
      ? 'Всесвіт Дикого Поля (Loca Deserta) — Українські Ігри про Козаків, Книги та Дике Поле Sci-Fi | Дмитро Гладкий'
      : 'Loca Deserta (Wild Field) — Ukrainian Cossack Games & Sci-Fi Universe by Dmytro Gladkyi',
    description: isUk
      ? 'Офіційний сайт всесвіту «Дике Поле» (Loca Deserta) Дмитра Гладкого: ігри про козаків XVII ст. (Одеса, Слобода 2, Чумаки, Слобода, Ґекс, Інтерактивні історії), космічна стратегія Loca Deserta: Settlers та книги серії «Зоряний Гетьманат».'
      : 'Official portal of the Loca Deserta (Wild Field) universe by Dmytro Gladkyi: XVII-century Ukrainian Cossack games (Odesa, Sloboda 2, Chumaki, Sloboda, Hex, Interactive Stories), Loca Deserta: Settlers space strategy, and Star Hetmanate Sci-Fi novels.',
    canonicalPath: isUk ? '/uk/' : '/',
    altEnPath: '/',
    altUkPath: '/uk/',
    ogImage: '/assets/og/og-odesa.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: isUk ? '/uk/' : '/' }
    ],
    jsonLd: [...gamesJsonLd, ...booksJsonLd, faqJsonLd],
    activeNav: 'games',
    bodyContent
  });
}

module.exports = { buildHomePage };
