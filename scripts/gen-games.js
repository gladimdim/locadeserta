const { SITE_URL, renderLayout } = require('./site-core');

function renderGallery(images) {
  return `<div class="gallery-grid">
    ${images.map(img => `
      <figure class="gallery-item" data-lightbox="${img.src}">
        <img src="${img.src}" alt="${img.caption}" loading="lazy">
        <figcaption class="gallery-caption">${img.caption}</figcaption>
      </figure>
    `).join('\n')}
  </div>`;
}

// 1. ODESA
function buildOdesaPage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const gallery = isUk
    ? [
        { src: '/odesa/images/secret_place.jpg', caption: 'Козацька Могила в центрі острова' },
        { src: '/odesa/images/uk/starter.png', caption: 'Початок пригод у Хаджибеї-Одесі' },
        { src: '/odesa/images/uk/camp.png', caption: 'Табір поселенців та буджацьких татар' },
        { src: '/odesa/images/uk/progress.png', caption: 'Розбудова економіки регіону' },
        { src: '/odesa/images/uk/quests.png', caption: 'Понад 70 взаємопов’язаних квестів' },
        { src: '/odesa/images/uk/history.png', caption: 'Пошук 5 закопаних українських артефактів' }
      ]
    : [
        { src: '/odesa/images/secret_place.jpg', caption: 'Cossack Tomb & Artifact Sanctuary' },
        { src: '/odesa/images/gather.png', caption: 'Resource Gathering & Settlement Economy' },
        { src: '/odesa/images/quests.png', caption: '70+ Interconnected Story Quests' },
        { src: '/odesa/images/treasures.png', caption: 'Digging Up 5 Buried Ukrainian Treasures' },
        { src: '/odesa/images/artefacts.png', caption: 'Collecting Historical Artifacts' }
      ];

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Одеса' : 'Loca Deserta: Odesa'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">⚔️ ${isUk ? 'Пригоди, Квести та Крафт • XVII Століття' : 'Adventure, Quests & Crafting • XVII Century'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Одеса. Заселяємо південь України!' : 'Loca Deserta: Odesa. Settle Southern Ukraine!'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Допоможіть козакам та поселенцям розбудувати Хаджибей-Одесу! Понад 70 взаємопов’язаних квестів, інтерактивні персонажі, пошук 5 закопаних скарбів із лопатою, 100% українська озвучка та бомбічні українські пісні 🇺🇦.'
                : 'Help Cossack pioneers settle Khadjibey-Odesa in the Wild Field universe! Complete 70+ interconnected quests, interact with every NPC, unearth 5 buried treasures with your shovel, and enjoy 100% Ukrainian & English support with full voice acting and songs 🇺🇦.'}
            </p>
            <div class="btn-group">
              <a href="https://store.steampowered.com/app/2637950/_/" class="btn btn-primary" target="_blank" rel="noopener">🎮 Steam Store</a>
              <a href="https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b" class="btn btn-outline" target="_blank" rel="noopener">Epic Games Store</a>
              <a href="https://apps.apple.com/app/loca-deserta-odesa/id6449617200" class="btn btn-outline" target="_blank" rel="noopener">🍎 App Store (iOS)</a>
              <a href="https://play.google.com/store/apps/details?id=com.dmytrogladkyi.SlobodaOdesa" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
            </div>
          </div>
          <div>
            <img src="/odesa/images/secret_place.jpg" alt="Loca Deserta: Odesa" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <div class="prose">
          <h2>${isUk ? 'Про гру' : 'About the Game'}</h2>
          <p>
            ${isUk
              ? 'Візьміть на себе роль простого козака, який допомагає розбудувати економіку нової області у Хаджибеї-Одесі. Більше ніж 70 квестів — від допомоги отаману козаків відновити сили після походу до допомоги буджацьким татарам оселитися в Хаджибеї.'
              : 'Take on the role of a Cossack settler helping build the economy of a new southern region in Khadjibey-Odesa. Tackle more than 70 interconnected quests — from helping the Cossack Chieftain recover after a campaign to helping Budjak Tatars settle peacefully.'}
          </p>
          <p>
            ${isUk
              ? 'Усі неігрові персонажі — інтерактивні. Вони розкажуть про особливості гри або підкажуть, хто шариться вночі по цвинтарю зі свічкою (підказка: шукають скарби теж ✊🏻). Виконуючи завдання, ви отримаєте координати закопаних скарбів. Беріть лопату в руки, викопуйте їх і приносьте в центр острова на Козацьку Могилу, де Кошовий збирає всі українські артефакти!'
              : 'All non-playable characters are interactive. They will share lore secrets or tell you who is prowling around the cemetery at night with a candle (hint: they are hunting for treasures too!). Once you uncover clues, grab your shovel, dig up the 5 hidden treasures, and bring them to the Cossack Tomb at the center of the island!'}
          </p>
        </div>

        <h2 class="section-title" style="margin: 2.5rem 0 1rem;">${isUk ? 'Скріншоти гри' : 'Screenshots Gallery'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Одеса — Козацька Пригодницька Гра (Steam, iOS, Android)' : 'Loca Deserta: Odesa — Cossack Adventure & Crafting Game (Steam, Epic, iOS, Android)',
    description: isUk
      ? 'Заселяємо південь України в грі «Дике Поле: Одеса»! Понад 70 квестів у Хаджибеї, пошук 5 скарбів, українська озвучка та пісні. Доступно в Steam, Epic Games, App Store та Google Play.'
      : 'Settle southern Ukraine in Loca Deserta: Odesa! 70+ interconnected quests in Khadjibey-Odesa, treasure hunting, crafting, and full voice acting. Available on Steam, Epic Store, iOS & Android.',
    canonicalPath: isUk ? '/odesa/index_uk.html' : '/odesa/',
    altEnPath: '/odesa/',
    altUkPath: '/odesa/index_uk.html',
    ogImage: '/assets/og/og-odesa.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Одеса' : 'Loca Deserta: Odesa', url: isUk ? '/odesa/index_uk.html' : '/odesa/' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Одеса' : 'Loca Deserta: Odesa',
      genre: ['Adventure', 'RPG', 'Crafting'],
      gamePlatform: ['Windows', 'macOS', 'iOS', 'Android'],
      applicationCategory: 'Game',
      operatingSystem: 'Windows, macOS, iOS, Android',
      inLanguage: ['uk', 'en'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-odesa.jpg`,
      sameAs: [
        'https://store.steampowered.com/app/2637950/_/',
        'https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b',
        'https://apps.apple.com/app/loca-deserta-odesa/id6449617200',
        'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.SlobodaOdesa'
      ]
    }],
    activeNav: 'games',
    bodyContent
  });
}

// 2. SLOBODA 2
function buildSloboda2Page(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const gallery = [
    { src: '/sloboda2/images/thumbnail.png', caption: isUk ? 'Головний арт Слобода 2' : 'Sloboda 2 Key Art' },
    { src: '/sloboda2/images/uk/map_overview.png', caption: isUk ? 'Огляд долин та поселення' : 'Settlement & Valleys Overview' },
    { src: '/sloboda2/images/uk/tower_unlocker.png', caption: isUk ? 'Відкриття нових земель гарматним пострілом' : 'Unlocking Valleys with Cannon Towers' },
    { src: '/sloboda2/images/uk/sawmill_1.png', caption: isUk ? 'Лісопилка — Рівень 1' : 'Sawmill — Upgrade Tier 1' },
    { src: '/sloboda2/images/uk/sawmill_2.png', caption: isUk ? 'Лісопилка — Рівень 2' : 'Sawmill — Upgrade Tier 2' },
    { src: '/sloboda2/images/uk/sawmill_3.png', caption: isUk ? 'Лісопилка — Рівень 3' : 'Sawmill — Upgrade Tier 3' },
    { src: '/sloboda2/images/uk/cannon_production.png', caption: isUk ? 'Виробничий ланцюг гармат' : 'Cannon Production Chain' },
    { src: '/sloboda2/images/uk/metal_production.png', caption: isUk ? 'Виплавка металу в плавильні' : 'Metal Smelting Chain' },
    { src: '/sloboda2/images/uk/iron_production.png', caption: isUk ? 'Видобуток залізної руди' : 'Iron Ore Mining' }
  ];

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Слобода 2' : 'Loca Deserta: Sloboda 2'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">🏗️ ${isUk ? '3D Розбудова Селища та Виробничий Симулятор' : '3D Low-Poly City Builder & Production Simulator'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Слобода 2. Розбудуй селище у Війську Запорізькому' : 'Loca Deserta: Sloboda 2. Build a XVII-Century Cossack Settlement'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Візьміть на себе роль старости нової Слободи у Війську Запорізькому! Збирайте ресурси кайлом та сокирою, зводьте виробництва з трьома рівнями покращень, відкривайте 6 долин до Чорного моря та виконуйте понад 35 квестів. Повна підтримка геймпадів 🎮!'
                : 'Lead a newly founded settlement in XVII-century southern Ukraine! Gather resources with axe and pickaxe, construct buildings with 3 unique low-poly upgrade tiers, manage 14 production chains from timber to cannons, and unlock 6 valleys. Full controller support 🎮!'}
            </p>
            <div class="btn-group">
              <a href="https://apps.apple.com/us/app/loca-deserta-sloboda-2/id1642505646" class="btn btn-primary" target="_blank" rel="noopener">🍎 App Store (iOS)</a>
              <a href="https://play.google.com/store/apps/details?id=com.dmytrogladkyi.Sloboda" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
              <a href="/sloboda2/alpha.html" class="btn btn-outline">📜 ${isUk ? 'Історія розробки (Alpha Devlog)' : 'Alpha Devlog Archive'}</a>
              <a href="/sloboda2_licenses.html" class="btn btn-outline">⚖️ ${isUk ? 'Ліцензії' : 'Licenses'}</a>
            </div>
          </div>
          <div>
            <img src="/sloboda2/images/thumbnail.png" alt="Loca Deserta: Sloboda 2" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <div class="prose">
          <h2>${isUk ? 'Поєднання двох жанрів: Будівництво + Виробничі ланцюги' : 'Two Genres Combined: Settlement Building + Production Chains'}</h2>
          <p>
            ${isUk
              ? 'Гравці починають посеред дикого лісу з примітивними інструментами — сокирою, кайлом, відром води та вудкою. Поступово зводячи нові будівлі (кожна має 3 візуальні рівні покращення), ви налаштовуєте складні виробничі ланцюги: наприклад, щоб відлити гармату, потрібні метал, дошки, порох і дерево; для металу — залізна руда та деревне вугілля.'
              : 'Players start in the wild steppe and forest with primitive tools — an axe, pickaxe, water bucket, and fishing rod. By constructing and upgrading buildings through 3 distinct low-poly visual tiers, you automate complex production flows: from grain and bread to iron ore, charcoal, steel, gunpowder, and heavy Cossack cannons.'}
          </p>
        </div>

        <h2 class="section-title" style="margin: 2.5rem 0 1rem;">${isUk ? 'Скріншоти та Виробничі Ланцюги' : 'Screenshots & Production Chains'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Слобода 2 — 3D Стратегія та Симулятор Старости' : 'Loca Deserta: Sloboda 2 — 3D Low-Poly Settlement Builder & Production Game',
    description: isUk
      ? 'Розбудуйте козацьке селище у Війську Запорізькому в грі «Дике Поле: Слобода 2». 14 виробничих ланцюгів, 6 долин, 35+ квестів та підтримка джойстиків.'
      : 'Build a thriving XVII-century Cossack settlement in Loca Deserta: Sloboda 2. Manage 14 production chains, upgrade 3D low-poly buildings, and unlock new valleys.',
    canonicalPath: isUk ? '/sloboda2/index_uk.html' : '/sloboda2/',
    altEnPath: '/sloboda2/',
    altUkPath: '/sloboda2/index_uk.html',
    ogImage: '/assets/og/og-sloboda2.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Слобода 2' : 'Loca Deserta: Sloboda 2', url: isUk ? '/sloboda2/index_uk.html' : '/sloboda2/' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Слобода 2' : 'Loca Deserta: Sloboda 2',
      genre: ['City Builder', 'Strategy', 'Production Simulation'],
      gamePlatform: ['iOS', 'Android', 'Windows'],
      applicationCategory: 'Game',
      operatingSystem: 'iOS, Android, Windows',
      inLanguage: ['uk', 'en', 'pl', 'de'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-sloboda2.jpg`,
      sameAs: [
        'https://apps.apple.com/us/app/loca-deserta-sloboda-2/id1642505646',
        'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.Sloboda'
      ]
    }],
    activeNav: 'games',
    bodyContent
  });
}

// 3. CHUMAKI
function buildChumakiPage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const folder = isUk ? 'uk' : 'en';
  const gallery = [
    { src: `/locadesertachumaki/images/${folder}/main.png`, caption: isUk ? 'Головний екран ватаги на Січі' : 'Main Wagon & Town View' },
    { src: `/locadesertachumaki/images/${folder}/market.png`, caption: isUk ? 'Торгівля та Світовий Ринок цін' : 'Town Market & Global Price Comparison' },
    { src: `/locadesertachumaki/images/${folder}/otaman.png`, caption: isUk ? 'Отамани та перки торгівлі' : 'Otamans (Leaders) & Trade Perks' },
    { src: `/locadesertachumaki/images/${folder}/manufacturing.png`, caption: isUk ? 'Будівництво виробництв у містах' : 'Town Manufactories (3 Upgrade Levels)' },
    { src: `/locadesertachumaki/images/${folder}/event.png`, caption: isUk ? 'Унікальні події та завдання містян' : 'Handcrafted Town Quests & Events' },
    { src: `/locadesertachumaki/images/${folder}/map.png`, caption: isUk ? 'Мапа Боплана: понад 25 міст України' : 'Historical Boplan Map with 25+ Ukrainian Towns' }
  ];

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Чумаки' : 'Loca Deserta: Chumaki'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">🐂 ${isUk ? 'Економічний Симулятор Чумака • XVII Сторіччя' : 'XVII-Century Ukrainian Trader Simulator'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Чумаки' : 'Loca Deserta: Chumaki'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Спробуйте себе в ролі чумака-торговця в Україні XVII сторіччя! Починайте на Запорозькій Січі з одним возом, аналізуйте ціни на Світовому Ринку між 25+ містами (Чигирин, Канів, Черкаси), наймайте отаманів і будуйте власні виробництва.'
                : 'Step into the boots of a XVII-century Chumak merchant in Ukraine! Start at Zaporozhian Sich with a single wagon, compare prices across 25+ historical towns on the Boplan map, hire Otamans, unlock luxury goods (silk, cannons, amber), and build town manufactories.'}
            </p>
            <div class="btn-group">
              <a href="/chumaki/" class="btn btn-primary">▶ ${isUk ? 'Грати Онлайн у Браузері' : 'Play Online in Browser'}</a>
              <a href="https://play.google.com/store/apps/details?id=com.gladimdim.chumaki" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
              <a href="https://apps.apple.com/us/app/%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%B8/id1582158648" class="btn btn-outline" target="_blank" rel="noopener">🍎 App Store</a>
              <a href="https://github.com/gladimdim/locadeserta/releases/download/universe-1.0/chumaki_windows_1.0.zip" class="btn btn-outline">💻 Windows ZIP</a>
              <a href="https://github.com/gladimdim/locadeserta/releases/download/universe-1.0/chumaki_macos_1.0.zip" class="btn btn-outline">🍏 macOS ZIP</a>
              <a href="https://github.com/gladimdim/locadeserta/releases/download/universe-1.0/chumaki_1.0.apk" class="btn btn-outline">📦 Android APK</a>
            </div>
          </div>
          <div>
            <img src="/locadesertachumaki/images/thumbnails.png" alt="Loca Deserta: Chumaki" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <div class="prose">
          <h2>${isUk ? 'Особливості Ігроладу' : 'Core Gameplay Features'}</h2>
          <ul>
            <li><strong>${isUk ? 'Торгівля та Світовий Ринок:' : 'Trading & Global Market:'}</strong> ${isUk ? 'Перевіряйте різницю цін між поточним містом та всіма містами мапи, щоб знаходити найприбутковіші маршрути.' : 'Compare town stocks and profit margins across the entire map before dispatching your wagons.'}</li>
            <li><strong>${isUk ? 'Отамани та Перки:' : 'Otamans & Perks:'}</strong> ${isUk ? 'Наймайте отаманів для нових ватаг, здобувайте досвід за угоди та відкривайте доступ до дорогих категорій товарів.' : 'Hire Otaman leaders for each wagon to earn XP and unlock high-margin luxury goods.'}</li>
            <li><strong>${isUk ? 'Виробництва у містах:' : 'Town Manufactories:'}</strong> ${isUk ? 'Будуйте та оновлюйте виробництва до 3-го рівня у 25+ містах, щоб поповнювати запаси дефіцитних товарів.' : 'Build and upgrade manufactories up to level 3 in over 25 historical Ukrainian towns.'}</li>
            <li><strong>${isUk ? 'Ручні квести для кожного міста:' : 'Handcrafted City Events:'}</strong> ${isUk ? 'Жодної випадкової генерації — кожне місто має власні історичні завдання від містян.' : 'Complete custom tasks for townsfolk to earn large gold rewards and Otaman experience.'}</li>
          </ul>
        </div>

        <h2 class="section-title" style="margin: 2.5rem 0 1rem;">${isUk ? 'Скріншоти гри' : 'Screenshots Gallery'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Чумаки — Симулятор Чумацької Торгівлі в Україні XVII ст.' : 'Loca Deserta: Chumaki — XVII-Century Ukrainian Trader Simulator (Web, iOS, Android, PC)',
    description: isUk
      ? 'Грайте в «Дике Поле: Чумаки» онлайн у браузері або на Android, iOS, Windows та macOS! Торгуйте між 25+ козацькими містами на мапі Боплана.'
      : 'Play Loca Deserta: Chumaki online in your browser or on iOS, Android, Windows & macOS! Trade across 25+ XVII-century Ukrainian towns.',
    canonicalPath: isUk ? '/locadesertachumaki/' : '/locadesertachumaki/index_en.html',
    altEnPath: '/locadesertachumaki/index_en.html',
    altUkPath: '/locadesertachumaki/',
    ogImage: '/assets/og/og-chumaki.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Чумаки' : 'Loca Deserta: Chumaki', url: isUk ? '/locadesertachumaki/' : '/locadesertachumaki/index_en.html' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Чумаки' : 'Loca Deserta: Chumaki',
      genre: ['Trading Simulation', 'Economic Strategy'],
      gamePlatform: ['Web Browser', 'Android', 'iOS', 'Windows', 'macOS'],
      applicationCategory: 'Game',
      operatingSystem: 'Web, Android, iOS, Windows, macOS',
      inLanguage: ['uk', 'en'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-chumaki.jpg`,
      url: `${SITE_URL}/chumaki/`
    }],
    activeNav: 'games',
    bodyContent
  });
}

// 4. SLOBODA 1 (CITYBUILDING)
function buildCitybuildingPage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const folder = isUk ? 'uk' : 'en';
  const gallery = [
    { src: '/citybuilding/images/main_view.jpg', caption: isUk ? 'Головний екран Слободи' : 'Main Settlement View' },
    { src: '/citybuilding/images/smith_view.jpg', caption: isUk ? 'Кузня: виробництво самопалів' : 'Smithy: Firearm Production' },
    { src: '/citybuilding/images/powder_view.jpg', caption: isUk ? 'Пороховий льох' : 'Powder Cellar' },
    { src: '/citybuilding/images/sich_view_0.jpg', caption: isUk ? 'Запорозька Січ (онлайн-допомога всіх гравців)' : 'Zaporozhian Sich Central Online Hub' },
    { src: `/citybuilding/images/${folder}/outer_map_overview.jpeg`, caption: isUk ? 'Мапа Околиць селища' : 'Outer Map Overview' },
    { src: `/citybuilding/images/${folder}/sich_map_en.jpeg`, caption: isUk ? 'Велика Мапа Війська Запорозького' : 'Grand Map of Zaporozhian Sich Lands' },
    { src: `/citybuilding/images/${folder}/sich_map_trade.jpeg`, caption: isUk ? 'Торгівля з куренями та поселеннями' : 'Trading with Settled Kurins' },
    { src: '/citybuilding/images/shooting_range_view.jpg', caption: isUk ? 'Стрільбище для вишколу козаків' : 'Shooting Range for Cossack Training' }
  ];

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Слобода' : 'Loca Deserta: Sloboda'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">🏰 ${isUk ? 'Класична Стратегія • XVI–XVII Століття' : 'Classic City-Building Strategy • XVI–XVII Century'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Слобода. Стратегічна гра на межі Великого Лугу' : 'Loca Deserta: Sloboda. City-Building Strategy in Cossack Ukraine'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Очольте новозасновану слободу на межі Великого Лугу! Розподіляйте робітників, будуйте кузні й порохові льохи, вишколюйте озброєних козаків на стрільбищі, надсилайте підкріплення на центральний сервер Запорозької Січі та здійснюйте походи на Очаків і Крим.'
                : 'Lead a newly founded Cossack settlement between the Sich and Crimea! Assign free workers, manage multi-tier resource chains (grain, iron, gunpowder, firearms, horses), train Cossack armies, contribute to the global Sich server, and explore two handcrafted maps.'}
            </p>
            <div class="btn-group">
              <a href="/sloboda/" class="btn btn-primary">▶ ${isUk ? 'Грати Онлайн (/sloboda)' : 'Play Online (/sloboda)'}</a>
              <a href="https://play.google.com/store/apps/details?id=com.gladimdim.sloboda" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
              <a href="https://apps.apple.com/ua/app/sloboda/id1543669328?l=uk" class="btn btn-outline" target="_blank" rel="noopener">🍎 App Store</a>
              <a href="https://github.com/gladimdim/locadeserta/releases/download/sloboda-3.0.7/sloboda_windows_307.zip" class="btn btn-outline">💻 Windows ZIP</a>
              <a href="https://github.com/gladimdim/locadeserta/releases/download/sloboda-3.0.7/sloboda_307.apk" class="btn btn-outline">📦 Android APK</a>
            </div>
          </div>
          <div>
            <img src="/citybuilding/images/sloboda_thumbnail.jpg" alt="Loca Deserta: Sloboda" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <div class="prose">
          <h2>${isUk ? 'Економіка, Січ, Дві Мапи та 24 Випадкові Події' : 'Economy, Global Sich Hub, Two Maps & 24 Dynamic Events'}</h2>
          <p>
            ${isUk
              ? 'Кожна дія в слободі наближає зміну пори року (Зима, Весна, Літо, Осінь). Щоб вишколити козака на Стрільбищі, потрібні вільний селянин, кінь, самопал, їжа та гроші. Побудувавши Церкву, Курені й Башти, ви зможете відбивати напади татарських чамбулів, досліджувати Околиці у пошуках скіфського золота та заселяти курені на Великій Мапі Війська Запорозького.'
              : 'Every production task advances the seasonal cycle (Winter, Spring, Summer, Autumn). Combine grain, iron ore, wood, and gunpowder to arm Cossacks at the Shooting Range. Use cross-device 6-digit Cloud Sync to play seamlessly between browser, phone, and PC!'}
          </p>
        </div>

        <h2 class="section-title" style="margin: 2.5rem 0 1rem;">${isUk ? 'Скріншоти та Мапи' : 'Screenshots & Maps'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Слобода — Стратегічна Гра про Розбудову Козацького Селища' : 'Loca Deserta: Sloboda — XVI-XVII Century Ukrainian City-Building Strategy Game',
    description: isUk
      ? 'Грайте в класичну стратегію «Дике Поле: Слобода» онлайн у браузері або на iOS, Android та Windows. Розбудова селища, Запорозька Січ та 24 історичні події.'
      : 'Play Loca Deserta: Sloboda online in your browser or on iOS, Android, and Windows. Build a Cossack settlement, manage production chains, and conquer the Sich map.',
    canonicalPath: isUk ? '/citybuilding/' : '/citybuilding/index_en.html',
    altEnPath: '/citybuilding/index_en.html',
    altUkPath: '/citybuilding/',
    ogImage: '/assets/og/og-sloboda.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Слобода' : 'Loca Deserta: Sloboda', url: isUk ? '/citybuilding/' : '/citybuilding/index_en.html' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Слобода' : 'Loca Deserta: Sloboda',
      genre: ['Strategy', 'City Builder'],
      gamePlatform: ['Web Browser', 'Android', 'iOS', 'Windows'],
      applicationCategory: 'Game',
      operatingSystem: 'Web, Android, iOS, Windows',
      inLanguage: ['uk', 'en'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-sloboda.jpg`,
      url: `${SITE_URL}/sloboda/`
    }],
    activeNav: 'games',
    bodyContent
  });
}

// 5. INTERACTIVE STORIES
function buildInteractivePage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const folder = isUk ? 'uk' : 'en';
  const gallery = [
    { src: `/images/${folder}/screen1.png`, caption: isUk ? 'Обкладинка та вибір історії' : 'Story Cover & Selection' },
    { src: `/images/${folder}/screen2.png`, caption: isUk ? 'Ілюстрований інтерактивний сюжет' : 'Illustrated Branching Narrative' },
    { src: `/images/${folder}/screen3.png`, caption: isUk ? 'Прийняття доленосних рішень' : 'Life-or-Death Player Choices' },
    { src: `/images/${folder}/screen4.png`, caption: isUk ? 'Вбудований редактор історій' : 'Cross-Platform Story Creator' }
  ];

  const storiesList = isUk
    ? `<ul>
        <li><strong>Після битви (18 кінцівок):</strong> Втеча молодого козака з османського полону після поразки під Цецорою (1620 р.) крізь небезпечне Дике Поле.</li>
        <li><strong>Хотинська різанина:</strong> Нічний рейд козаків до турецьких гармашів, заснований на щоденниках німецьких найманців.</li>
        <li><strong>Зустріч у степу:</strong> Пригоди козацького загону під час зачистки відступаючих татар на Канівщині.</li>
        <li><strong>Кривава пастка:</strong> Засідка та знищення карального загону під Жовтими Водами у 1648 році.</li>
        <li><strong>Останній бій під Берестечком:</strong> Прикриття відходу основних сил козаками Переяславського полку.</li>
        <li><strong>Кодацька ніч (1635 р.):</strong> Зруйнування Кодацької фортеці під проводом гетьмана Івана Сулими.</li>
        <li><strong>Переправа, Полювання на ведмедя, Пожежа в степу, Вовча пастка:</strong> Історії про виживання уходників і пластунів.</li>
      </ul>`
    : `<ul>
        <li><strong>After the Battle (Available in English & Ukrainian — 18 Endings):</strong> Escape from Ottoman captivity after the Battle of Cecora (1620) across the hostile Loca Deserta steppe between Crimea and the Zaporozhian Sich.</li>
        <li><strong>Khotyn Massacre (Хотинська різанина):</strong> A daring night raid on Ottoman artillery positions based on 1621 mercenary diaries.</li>
        <li><strong>Encounter in the Steppe, Bloody Trap (Zhovti Vody 1648), Last Stand at Berestechko, Kodak Night (1635), The Crossing, Bear Hunt, Steppe Wildfire, Wolf Trap:</strong> 9+ historical branching adventures available in Ukrainian.</li>
      </ul>`;

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Інтерактивні історії' : 'Loca Deserta: Interactive Stories'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">📜 ${isUk ? 'Інтерактивна Література та Редактор Історій' : 'Interactive Fiction & Cross-Platform Story Editor'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Інтерактивні Історії про Козаччину' : 'Loca Deserta: Interactive Stories of Cossack Ukraine'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Серія нелінійних інтерактивних оповідань про події в Україні XVI–XVII століть. Обирайте власний шлях розвитку сюжету, грайте прямо в браузері або створюйте власні історії у вбудованому редакторі!'
                : 'A branching interactive fiction series set in XVI–XVII century Cossack Ukraine. Every choice shapes your survival. Play directly in your web browser or craft your own stories with the built-in cross-device editor!'}
            </p>
            <div class="btn-group">
              <a href="/game/?lang=${isUk ? 'uk' : 'en'}" class="btn btn-primary">▶ ${isUk ? 'Грати Онлайн у Браузері' : 'Play Online in Browser'}</a>
              <a href="https://apps.apple.com/us/app/loca-deserta/id1468068398" class="btn btn-outline" target="_blank" rel="noopener">🍎 App Store</a>
              <a href="https://play.google.com/store/apps/details?id=gladimdim.locadeserta" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
            </div>
          </div>
          <div>
            <img src="/interactive/images/thumbnail.jpg" alt="Loca Deserta Interactive Stories" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <div class="prose">
          <h2>${isUk ? 'Доступні історії у всесвіті' : 'Available Stories in the Universe'}</h2>
          ${storiesList}
          <h2>${isUk ? 'Створіть власну інтерактивну історію' : 'Create Your Own Interactive Story'}</h2>
          <p>
            ${isUk
              ? 'І веб-, і мобільна версії гри мають повноцінний редактор історій із хмарною синхронізацією. Ви можете почати писати власну пригоду на смартфоні та продовжити редагування на комп’ютері.'
              : 'Both the web and mobile editions include a synchronized Story Creator. Start writing a branching adventure on your phone and seamlessly continue editing on your desktop.'}
          </p>
        </div>

        <h2 class="section-title" style="margin: 2.5rem 0 1rem;">${isUk ? 'Ілюстрації та Інтерфейс' : 'Artwork & Interface'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Інтерактивні Історії — Козацькі Текстові Квести Онлайн' : 'Loca Deserta: Interactive Stories — Historical Ukrainian Interactive Fiction',
    description: isUk
      ? 'Грайте в «Дике Поле: Інтерактивні історії» онлайн у браузері, на iOS та Android. 9+ історій про козаків та редактор сюжетів.'
      : 'Play Loca Deserta Interactive Stories online in your browser or on iOS & Android. Branching historical adventures set in XVII-century Ukraine.',
    canonicalPath: isUk ? '/interactive/' : '/interactive/index_en.html',
    altEnPath: '/interactive/index_en.html',
    altUkPath: '/interactive/',
    ogImage: '/assets/og/og-interactive.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Інтерактивні історії' : 'Loca Deserta: Interactive Stories', url: isUk ? '/interactive/' : '/interactive/index_en.html' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Інтерактивні історії' : 'Loca Deserta: Interactive Stories',
      genre: ['Interactive Fiction', 'Role-Playing', 'Historical'],
      gamePlatform: ['Web Browser', 'Android', 'iOS'],
      applicationCategory: 'Game',
      operatingSystem: 'Web, Android, iOS',
      inLanguage: ['uk', 'en', 'pl'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-interactive.jpg`,
      url: `${SITE_URL}/game/`
    }],
    activeNav: 'games',
    bodyContent
  });
}

// 6. HEX
function buildHexPage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';
  const folder = isUk ? 'uk' : 'en';
  const gallery = [
    { src: `/locadesertahex/images/${folder}/start.png`, caption: isUk ? 'Початок з одного центрального гексу' : 'Starting from a Single Center Hex' },
    { src: `/locadesertahex/images/${folder}/cossack_tile.png`, caption: isUk ? 'Вимоги для найму козацького гексу' : 'Resource Requirements for a Cossack Tile' },
    { src: `/locadesertahex/images/${folder}/medium.png`, caption: isUk ? 'Розширення володінь та війська' : 'Expanding Territory & Army' },
    { src: `/locadesertahex/images/${folder}/stock.png`, caption: isUk ? 'Огляд запасів економіки слободи' : 'Settlement Resource Stockpile' },
    { src: `/locadesertahex/images/${folder}/bigger.png`, caption: isUk ? 'Величезна процедурна гексагональна мапа' : 'Massive Hexagonal Map' },
    { src: `/locadesertahex/images/${folder}/walls.png`, caption: isUk ? 'Штурм ворожих стін та фортець на 15-му колі' : 'Breaching 15th-Ring Enemy Fortress Walls' }
  ];

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Дике Поле: Ґекс' : 'Loca Deserta: Hex'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow">⬢ ${isUk ? 'Гексагональна Стратегія-Пазл' : 'Hexagonal Strategy & Resource Puzzle'}</span>
            <h1 class="hero-title">${isUk ? 'Дике Поле: Ґекс' : 'Loca Deserta: Hex'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Захопливий тактичний пазл у всесвіті Дикого Поля! Починайте з одного центрального гексу, збирайте безкоштовне зерно, комбінуйте ресурси для створення козаків, гармат, возів та човнів і проривайте кільце ворожих фортець на 15-му радіусі!'
                : 'An addictive hexagonal territory-expansion puzzle set in the Loca Deserta universe! Start from a single tile, harvest grain, chain resources into Cossacks, cannons, wagons, and boats, and breach the 15th-ring enemy fortresses for maximum score!'}
            </p>
            <div class="btn-group">
              <a href="/hex/" class="btn btn-primary">▶ ${isUk ? 'Грати Онлайн у Браузері (/hex)' : 'Play Online in Browser (/hex)'}</a>
              <a href="https://apps.apple.com/ua/app/loca-deserta-hex/id1553674081" class="btn btn-outline" target="_blank" rel="noopener">🍎 App Store (iOS)</a>
              <a href="https://play.google.com/store/apps/details?id=com.gladimdim.locadesertahex" class="btn btn-outline" target="_blank" rel="noopener">🤖 Google Play</a>
            </div>
          </div>
          <div>
            <img src="/locadesertahex/images/hex_thumbnail.jpg" alt="Loca Deserta: Hex" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); border: 1px solid var(--border-accent);">
          </div>
        </div>

        <h2 class="section-title" style="margin: 2rem 0 1rem;">${isUk ? 'Ігролад у скріншотах' : 'Gameplay Screenshots'}</h2>
        ${renderGallery(gallery)}
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Дике Поле: Ґекс — Гексагональний Пазл-Стратегія Онлайн' : 'Loca Deserta: Hex — Tactical Hexagonal Puzzle Game (Web, iOS, Android)',
    description: isUk
      ? 'Грайте в «Дике Поле: Ґекс» безкоштовно в браузері або на iOS та Android. Захоплюйте гекси, збирайте козацьке військо та штурмуйте ворожі фортеці!'
      : 'Play Loca Deserta: Hex online in your browser or on iOS & Android. Expand your territory hex by hex and storm enemy fortresses.',
    canonicalPath: isUk ? '/locadesertahex/' : '/locadesertahex/index_en.html',
    altEnPath: '/locadesertahex/index_en.html',
    altUkPath: '/locadesertahex/',
    ogImage: '/assets/og/og-hex.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Дике Поле: Ґекс' : 'Loca Deserta: Hex', url: isUk ? '/locadesertahex/' : '/locadesertahex/index_en.html' }
    ],
    jsonLd: [{
      '@type': 'VideoGame',
      name: isUk ? 'Дике Поле: Ґекс' : 'Loca Deserta: Hex',
      genre: ['Puzzle', 'Strategy'],
      gamePlatform: ['Web Browser', 'Android', 'iOS'],
      applicationCategory: 'Game',
      operatingSystem: 'Web, Android, iOS',
      inLanguage: ['uk', 'en'],
      author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: `${SITE_URL}/assets/og/og-hex.jpg`,
      url: `${SITE_URL}/hex/`
    }],
    activeNav: 'games',
    bodyContent
  });
}

module.exports = {
  buildOdesaPage,
  buildSloboda2Page,
  buildChumakiPage,
  buildCitybuildingPage,
  buildInteractivePage,
  buildHexPage
};
