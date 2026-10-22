#!/usr/bin/env node
/**
 * Loca Deserta Universe — Static Site Generator (Zero External Dependencies)
 * Generates bilingual (EN default + UK) HTML pages, SEO JSON-LD, sitemap.xml, robots.txt, and llms.txt.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://locadeserta.com';

// Ensure output directories exist
function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writePage(relPath, html) {
  const fullPath = path.join(ROOT, relPath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Generated: ${relPath}`);
}

// Navigation & Shared UI Strings
const UI = {
  en: {
    siteName: 'Loca Deserta',
    siteSubtitle: 'Wild Field Universe',
    navGames: 'Games',
    navSciFi: 'Sci-Fi & Books',
    navEcosystems: 'Fortnite & Roblox',
    navSocials: 'Socials & Stores',
    playBrowser: 'Play in Browser',
    learnMore: 'Game Page',
    readOnline: 'Read Online',
    downloadEpub: 'EPUB',
    allGames: 'All Games',
    catHistorical: 'XVII Century',
    catSciFi: 'Sci-Fi Universe',
    catBrowser: 'Play in Browser',
    catMobilePc: 'Steam & Mobile',
    footerTagline: 'An independent Ukrainian game & book universe by Dmytro Gladkyi. From XVII-century Cossack steppes to the Star Hetmanate of 2424 AD.',
    footerGames: 'Games Universe',
    footerSciFi: 'Sci-Fi & Books',
    footerLegal: 'Docs & Legal',
    rights: '© 2019–2026 Dmytro Gladkyi (Loca Deserta Universe). All rights reserved.',
  },
  uk: {
    siteName: 'Дике Поле',
    siteSubtitle: 'Всесвіт Loca Deserta',
    navGames: 'Ігри',
    navSciFi: 'Sci-Fi та Книги',
    navEcosystems: 'Fortnite і Roblox',
    navSocials: 'Соцмережі та Магазини',
    playBrowser: 'Грати в браузері',
    learnMore: 'Сторінка гри',
    readOnline: 'Читати на сайті',
    downloadEpub: 'EPUB',
    allGames: 'Усі ігри',
    catHistorical: 'XVII Століття',
    catSciFi: 'Всесвіт Sci-Fi',
    catBrowser: 'Браузерні',
    catMobilePc: 'Steam та Мобільні',
    footerTagline: 'Незалежний український ігровий та книжковий всесвіт Дмитра Гладкого. Від козацького Дикого Поля XVII століття до Зоряного Гетьманату 2424 року.',
    footerGames: 'Ігровий Всесвіт',
    footerSciFi: 'Sci-Fi та Книги',
    footerLegal: 'Документація та Правила',
    rights: '© 2019–2026 Дмитро Гладкий (Всесвіт Дикого Поля / Loca Deserta). Усі права захищено.',
  }
};

// Structured Data for All Games
const GAMES = [
  {
    id: 'sicha',
    categories: 'historical mobilepc',
    badgeClass: '',
    image: '/assets/og/og-sicha.jpg',
    en: {
      badge: 'Sabre Duels • Coming Soon',
      title: 'SICHA — Cossack Combat',
      desc: 'Pixel-art sabre duels from the age of the Cossacks. 35 heroes of the Hetmanate, the Commonwealth, the Ottomans and the Crimean Tatars, 12 combos, dozens of sabres, the Cossack\'s Path campaign and Wi-Fi duels with a friend. Coming soon to Android and iOS, then Steam.',
      platforms: ['Android (Soon)', 'iOS (Soon)', 'Steam (Soon)'],
      actions: [
        { label: '⚔ sicha.locadeserta.com', href: 'https://sicha.locadeserta.com/', cls: 'btn-primary' },
        { label: '▶ Watch the Trailer', href: 'https://sicha.locadeserta.com/#trailer', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Двобої на Шаблях • Скоро',
      title: 'СІЧА — Козацький двобій',
      desc: 'Піксельні двобої на шаблях з доби козацтва. 35 героїв Гетьманщини, Речі Посполитої, Османської імперії та Кримського ханства, 12 комбо, десятки шабель, кампанія «Козацький шлях» і двобої з другом через Wi-Fi. Незабаром на Android та iOS, згодом у Steam.',
      platforms: ['Android (Скоро)', 'iOS (Скоро)', 'Steam (Скоро)'],
      actions: [
        { label: '⚔ sicha.locadeserta.com', href: 'https://sicha.locadeserta.com/uk/', cls: 'btn-primary' },
        { label: '▶ Дивитися трейлер', href: 'https://sicha.locadeserta.com/uk/#trailer', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'settlers',
    categories: 'scifi browser',
    badgeClass: 'scifi',
    image: '/locadesertascifi/images/cover.jpg',
    en: {
      badge: 'Sci-Fi Strategy • New 2026',
      title: 'Loca Deserta: Settlers',
      desc: 'A macro-economic space colony builder inspired by The Settlers III/IV set in the Loca Deserta Sci-Fi universe. Harvest asteroids, chain production buildings, expand territory with Towers, and colonise planets named after Ukrainian regions — Podillia, Zhovti Vody, Kryvbas.',
      platforms: ['Web Browser (Free)', 'Windows', 'macOS', 'Linux'],
      actions: [
        { label: '▶ Play at settlers.locadeserta.com', href: 'https://settlers.locadeserta.com', cls: 'btn-scifi' },
        { label: '⬇ PC / Mac / Linux Builds', href: 'https://github.com/gladimdim/LocaDeserta_Settlers/releases', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Космічна Стратегія • Новинка 2026',
      title: 'Loca Deserta: Settlers',
      desc: 'Космічна економічна стратегія в дусі The Settlers III/IV у всесвіті Дике Поле Sci-Fi: видобувай ресурси на астероїдах, будуй виробничі ланцюги, розширюй територію Вежами та колонізуй планети з українськими назвами — Поділля, Жовті Води, Кривбас.',
      platforms: ['Браузер (Безкоштовно)', 'Windows', 'macOS', 'Linux'],
      actions: [
        { label: '▶ Грати на settlers.locadeserta.com', href: 'https://settlers.locadeserta.com', cls: 'btn-scifi' },
        { label: '⬇ Збірки Windows / macOS / Linux', href: 'https://github.com/gladimdim/LocaDeserta_Settlers/releases', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'odesa',
    categories: 'historical mobilepc',
    badgeClass: '',
    image: '/odesa/images/secret_place.jpg',
    en: {
      badge: 'RPG & Crafting • XVII Century',
      title: 'Loca Deserta: Odesa',
      desc: 'Settle the south of Ukraine in Khadjibey-Odesa! Take on the role of a Cossack pioneer: complete 70+ interconnected quests, help Budjak Tatars and Cossack chieftains, dig up 5 ancient Ukrainian treasures, and enjoy 100% Ukrainian & English voice acting and songs.',
      platforms: ['Steam', 'Epic Games Store', 'iOS App Store', 'Google Play'],
      actions: [
        { label: 'Game Details', href: '/odesa/', cls: 'btn-primary' },
        { label: 'Steam', href: 'https://store.steampowered.com/app/2637950/_/', cls: 'btn-outline' },
        { label: 'Epic Store', href: 'https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/app/loca-deserta-odesa/id6449617200', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.SlobodaOdesa', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Пригоди та Крафт • XVII Століття',
      title: 'Дике Поле: Одеса',
      desc: 'Заселяємо південь України в Хаджибеї-Одесі! Візьміть на себе роль козака: понад 70 взаємопов’язаних квестів, допомога отаману та буджацьким татарам, пошук 5 закопаних скарбів із лопатою, 100% українська озвучка та бомбічні пісні.',
      platforms: ['Steam', 'Epic Games Store', 'iOS App Store', 'Google Play'],
      actions: [
        { label: 'Детальніше про гру', href: '/odesa/index_uk.html', cls: 'btn-primary' },
        { label: 'Steam', href: 'https://store.steampowered.com/app/2637950/_/', cls: 'btn-outline' },
        { label: 'Epic Store', href: 'https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/ua/app/loca-deserta-odesa/id6449617200', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.SlobodaOdesa', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'sloboda2',
    categories: 'historical mobilepc',
    badgeClass: '',
    image: '/sloboda2/images/thumbnail.png',
    en: {
      badge: '3D Low-Poly Builder • Controller Support',
      title: 'Loca Deserta: Sloboda 2',
      desc: 'A 3D low-poly settlement builder and production simulator set in the Zaporozhian Host. Start with an axe and pickaxe, construct 40+ buildings with 3 upgrade tiers, manage 14 production chains (from timber to cannons & ships), and unlock 6 valleys to the Black Sea.',
      platforms: ['Steam', 'iOS App Store', 'Google Play', 'Gamepad Support'],
      actions: [
        { label: 'Game Details', href: '/sloboda2/', cls: 'btn-primary' },
        { label: 'iOS App Store', href: 'https://apps.apple.com/us/app/loca-deserta-sloboda-2/id1642505646', cls: 'btn-outline' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.Sloboda', cls: 'btn-outline' },
        { label: 'Alpha Devlog', href: '/sloboda2/alpha.html', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: '3D Лоу-Полі Будівництво • Підтримка Джойстиків',
      title: 'Дике Поле: Слобода 2',
      desc: '3D стратегія та виробничий симулятор старости нової Слободи у Війську Запорозькому. Збирайте ресурси кайлом та сокирою, зводьте будівлі з 3 рівнями покращень, налаштовуйте 14 виробничих ланцюгів (від вугілля до гармат) і відкривайте 6 долин.',
      platforms: ['Steam', 'iOS App Store', 'Google Play', 'Підтримка Геймпадів'],
      actions: [
        { label: 'Детальніше про гру', href: '/sloboda2/index_uk.html', cls: 'btn-primary' },
        { label: 'iOS App Store', href: 'https://apps.apple.com/ua/app/loca-deserta-sloboda-2/id1642505646', cls: 'btn-outline' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.dmytrogladkyi.Sloboda', cls: 'btn-outline' },
        { label: 'Архів Альфи', href: '/sloboda2/alpha.html', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'chumaki',
    categories: 'historical browser mobilepc',
    badgeClass: 'live',
    image: '/locadesertachumaki/images/thumbnails.png',
    en: {
      badge: 'Trading Simulator • Play Online',
      title: 'Loca Deserta: Chumaki',
      desc: 'Become a XVII-century Ukrainian Chumak salt-and-goods trader! Start at Zaporozhian Sich with one wagon, analyze market margins across 25+ historical towns (Chyhyryn, Kaniv, Cherkasy, Baturyn), hire Otamans, unlock trade perks, and build town manufactories.',
      platforms: ['Web Browser', 'Android', 'iOS', 'Windows', 'macOS'],
      actions: [
        { label: '▶ Play Online (/chumaki)', href: '/chumaki/', cls: 'btn-primary' },
        { label: 'Game Guide', href: '/locadesertachumaki/index_en.html', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%B8/id1582158648', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.chumaki', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Симулятор Чумака • Грати Онлайн',
      title: 'Дике Поле: Чумаки',
      desc: 'Спробуйте себе в ролі чумака-торговця в Україні XVII сторіччя! Починайте на Січі з однією ватагою, шукайте вигідні маршрути між 25+ козацькими містами (Чигирин, Канів, Черкаси), наймайте отаманів, будуйте виробництва та виконуйте доручення містян.',
      platforms: ['Браузер Онлайн', 'Android', 'iOS', 'Windows', 'macOS'],
      actions: [
        { label: '▶ Грати Онлайн (/chumaki)', href: '/chumaki/', cls: 'btn-primary' },
        { label: 'Опис Ігроладу', href: '/locadesertachumaki/', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%B8/id1582158648', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.chumaki', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'sloboda1',
    categories: 'historical browser mobilepc',
    badgeClass: 'live',
    image: '/citybuilding/images/sloboda_thumbnail.jpg',
    en: {
      badge: 'Classic Strategy • Play Online',
      title: 'Loca Deserta: Sloboda',
      desc: 'The classic turn-and-season strategy game at the edge of the Great Meadow (Velykyi Luh). Manage workers, build smithies and powder cellars, train armed Cossacks, send aid to the central Sich server, and explore two handcrafted maps through changing seasons.',
      platforms: ['Web Browser', 'Android', 'iOS', 'Windows', 'Cross-Device Sync'],
      actions: [
        { label: '▶ Play Online (/sloboda)', href: '/sloboda/', cls: 'btn-primary' },
        { label: 'Game Guide', href: '/citybuilding/index_en.html', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/ua/app/sloboda/id1543669328?l=uk', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.sloboda', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Класична Стратегія • Грати Онлайн',
      title: 'Дике Поле: Слобода',
      desc: 'Стратегічна гра про розбудову слободи на межі Великого Лугу у XVI–XVII століттях. Розподіляйте робітників, будуйте кузні й порохові льохи, озброюйте козаків самопалами, відправляйте допомогу на Січ та досліджуйте мапу Війська Запорозького.',
      platforms: ['Браузер Онлайн', 'Android', 'iOS', 'Windows', 'Хмарна Синхронізація'],
      actions: [
        { label: '▶ Грати Онлайн (/sloboda)', href: '/sloboda/', cls: 'btn-primary' },
        { label: 'Опис Ігроладу', href: '/citybuilding/', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/ua/app/sloboda/id1543669328?l=uk', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.sloboda', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'interactive',
    categories: 'historical browser mobilepc',
    badgeClass: 'live',
    image: '/interactive/images/thumbnail.jpg',
    en: {
      badge: 'Interactive Fiction • Story Editor',
      title: 'Loca Deserta: Interactive Stories',
      desc: 'The game that started the universe! A series of branching historical interactive stories with 9+ adventures (Khotyn Night Raid, Escape after Cicora with 18 endings, Yellow Waters Ambush, Kodak Night) plus a built-in cross-platform Story Creator and Telegram Bot.',
      platforms: ['Web Browser', 'iOS App Store', 'Google Play', 'Telegram Bot'],
      actions: [
        { label: '▶ Play Online (EN)', href: '/game/?lang=en', cls: 'btn-primary' },
        { label: 'Story List & Info', href: '/interactive/index_en.html', cls: 'btn-outline' },
        { label: 'Telegram Bot', href: 'https://t.me/locadesertabot', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/loca-deserta/id1468068398', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=gladimdim.locadeserta', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Інтерактивні Історії • Редактор Історій',
      title: 'Дике Поле: Інтерактивні Історії',
      desc: 'Перша гра всесвіту! Серія нелінійних інтерактивних оповідань про добу козаччини: «Хотинська різанина», «Після битви» (18 кінцівок), «Кривава пастка», «Останній бій під Берестечком», «Кодацька ніч» та вбудований кросплатформний редактор власних історій.',
      platforms: ['Браузер Онлайн', 'iOS App Store', 'Google Play', 'Телеграм-Бот'],
      actions: [
        { label: '▶ Грати Онлайн (UA)', href: '/game/?lang=uk', cls: 'btn-primary' },
        { label: 'Усі Історії та Опис', href: '/interactive/', cls: 'btn-outline' },
        { label: 'Телеграм-Бот', href: 'https://t.me/locadesertabot', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/loca-deserta/id1468068398', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=gladimdim.locadeserta', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'hex',
    categories: 'historical browser mobilepc',
    badgeClass: 'live',
    image: '/locadesertahex/images/hex_thumbnail.jpg',
    en: {
      badge: 'Hex Strategy Puzzle • Play Online',
      title: 'Loca Deserta: Hex',
      desc: 'A tactical hexagonal puzzle and territory expansion game. Start from a single central hex, harvest free grain tiles, combine resources to recruit Cossacks, cannons, wagons, and boats, and break through the 15th-ring enemy fortress walls!',
      platforms: ['Web Browser', 'iOS App Store', 'Google Play'],
      actions: [
        { label: '▶ Play Online (/hex)', href: '/hex/', cls: 'btn-primary' },
        { label: 'Game Guide', href: '/locadesertahex/index_en.html', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/us/app/loca-deserta-hex/id1553674081', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.locadesertahex', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Гексагональний Пазл • Грати Онлайн',
      title: 'Дике Поле: Ґекс',
      desc: 'Захоплива гексагональна стратегія-головоломка. Розширюйте володіння слободи гекс за гексом, комбінуйте ресурси для найму козаків, гармат, возів і чайки та проривайте кільце ворожих укріплень і таємних фортець на 15-му радіусі!',
      platforms: ['Браузер Онлайн', 'iOS App Store', 'Google Play'],
      actions: [
        { label: '▶ Грати Онлайн (/hex)', href: '/hex/', cls: 'btn-primary' },
        { label: 'Опис Ігроладу', href: '/locadesertahex/', cls: 'btn-outline' },
        { label: 'iOS', href: 'https://apps.apple.com/ua/app/loca-deserta-hex/id1553674081', cls: 'btn-outline' },
        { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.gladimdim.locadesertahex', cls: 'btn-outline' }
      ]
    }
  },
  {
    id: 'fortnite',
    categories: 'scifi historical',
    badgeClass: 'scifi',
    image: '/images/Fortnite_Games.png',
    en: {
      badge: '9 Published Islands • UEFN',
      title: 'Loca Deserta in Fortnite (@DmytroGladkyi)',
      desc: 'Explore 9 custom Fortnite Islands created by @DmytroGladkyi — featuring action maps set in both the historical Cossack Wild Field and the futuristic Loca Deserta Sci-Fi universe.',
      platforms: ['Fortnite (PC, Consoles, Mobile)'],
      actions: [
        { label: 'Explore Islands on Fortnite.com', href: 'https://www.fortnite.com/@dmytrogladkyi', cls: 'btn-scifi' }
      ]
    },
    uk: {
      badge: '9 Опублікованих Островів • UEFN',
      title: 'Ігри Дикого Поля у Fortnite (@DmytroGladkyi)',
      desc: 'Вже опубліковано 9 різноманітних ігор та островів у всесвіті Fortnite за авторством @DmytroGladkyi — включно з картами у новому всесвіті Loca Deserta Sci-Fi.',
      platforms: ['Fortnite (ПК, Консолі, Мобільні)'],
      actions: [
        { label: 'Всі ігри на Fortnite.com', href: 'https://www.fortnite.com/@dmytrogladkyi', cls: 'btn-scifi' }
      ]
    }
  },
  {
    id: 'roblox',
    categories: 'historical',
    badgeClass: '',
    image: '/logo.jpg',
    en: {
      badge: '20v20 Multiplayer Shooter • Roblox',
      title: 'Loca Deserta @ Roblox',
      desc: 'A team-based 20v20 multiplayer action shooter in Roblox! Cossacks vs. Tatars, objective-based warfare, weapon progression, custom skins, and the Assault on Kerch.',
      platforms: ['Roblox (PC, Mobile, Console)'],
      actions: [
        { label: '▶ Play on Roblox', href: 'https://www.roblox.com/games/105150009083536/Loca-Deserta-DEV-0-0-5', cls: 'btn-primary' },
        { label: 'Roblox Community', href: 'https://www.roblox.com/communities/35449027/Loca-Deserta-Games#!/about', cls: 'btn-outline' },
        { label: 'Guilded Server', href: 'https://www.guilded.gg/i/EA3wamqk', cls: 'btn-outline' }
      ]
    },
    uk: {
      badge: 'Командний Шутер 20 на 20 • Roblox',
      title: 'Дике Поле @ Roblox',
      desc: 'Командний мультиплеєрний шутер 20 на 20 у Roblox! Козаки проти татар, купа історичної зброї, скінів, прокачка персонажа та епічний штурм Керчі.',
      platforms: ['Roblox (ПК, Мобільні, Консолі)'],
      actions: [
        { label: '▶ Грати в Roblox', href: 'https://www.roblox.com/games/105150009083536/Loca-Deserta-DEV-0-0-5', cls: 'btn-primary' },
        { label: 'Спільнота Roblox', href: 'https://www.roblox.com/communities/35449027/Loca-Deserta-Games#!/about', cls: 'btn-outline' },
        { label: 'Сервер Guilded', href: 'https://www.guilded.gg/i/EA3wamqk', cls: 'btn-outline' }
      ]
    }
  }
];

// Sci-Fi Books Data
const BOOKS = [
  {
    id: 'zoryanij-getmanat',
    cover: '/locadesertascifi/images/cover.jpg',
    en: {
      badge: 'Book I • Loca Deserta Sci-Fi',
      title: '«Zoryanij Hetmanat» (Star Hetmanate)',
      desc: 'The foundational novel of Ukrainian military space sci-fi. In Star Era 281 (2424 AD), the Hetmanate Federation establishes secret colony "Wild Field 17" guarded by three regiments of Space Haiduks. In SE 323, all contact with the colony is lost...',
      links: [
        { label: '📖 Read Full Book on Site (UA)', href: '/locadesertascifi/books/Zoryanij_Getmanat.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Free)', href: 'https://booknet.ua/book/zoryanii-getmanat-b442821', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'https://books.apple.com/us/book/%D0%B7%D0%BE%D1%80%D1%8F%D0%BD%D0%B8%D0%B9-%D0%B3%D0%B5%D1%82%D1%8C%D0%BC%D0%B0%D0%BD%D0%B0%D1%82/id6752848228?ls=1', cls: 'btn-outline btn-sm' },
        { label: '⬇️ Download EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/download/space-getmanate/Zoryanij_Getmanat.epub', cls: 'btn-outline btn-sm' }
      ]
    },
    uk: {
      badge: 'Книга I • Дике Поле Sci-Fi',
      title: '«Зоряний Гетьманат»',
      desc: 'Перша книга в історії української бойової космічної фантастики! У 281 році Зоряної Епохи (2424 р.) Федерація Гетьманату засновує засекречену колонію «Дике Поле-17» під охороною трьох полків Космічних Гайдуків. У 323 році ЗЕ зв’язок обривається...',
      links: [
        { label: '📖 Читати повністю на сайті', href: '/locadesertascifi/books/Zoryanij_Getmanat.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Безкоштовно)', href: 'https://booknet.ua/book/zoryanii-getmanat-b442821', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'https://books.apple.com/us/book/%D0%B7%D0%BE%D1%80%D1%8F%D0%BD%D0%B8%D0%B9-%D0%B3%D0%B5%D1%82%D1%8C%D0%BC%D0%B0%D0%BD%D0%B0%D1%82/id6752848228?ls=1', cls: 'btn-outline btn-sm' },
        { label: '⬇️ Завантажити EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/download/space-getmanate/Zoryanij_Getmanat.epub', cls: 'btn-outline btn-sm' }
      ]
    }
  },
  {
    id: 'zustrich-v-stepu',
    cover: '/locadesertascifi/images/zustrich_v_stepu_cover.jpg',
    en: {
      badge: 'Book II • Released July 31, 2026',
      title: '«Zustrich v Stepu» (Encounter in the Steppe)',
      desc: 'Planet Wild Field-17. Otaman Bohdan Tytar leads three Plastun scouts on bot-horses armed with a heavy "Hornet" flamethrower deep behind Empire of the Sun lines to destroy an enemy melta-convoy.',
      links: [
        { label: '📖 About & Read (UA)', href: '/locadesertascifi/books/Zustrich_v_Stepu.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Free)', href: 'https://booknet.ua/book/zustrch-v-stepu-b446432', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'http://books.apple.com/us/book/id6796818751', cls: 'btn-outline btn-sm' },
        { label: '⬇️ GitHub EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/tag/encounter_in_steppe', cls: 'btn-outline btn-sm' }
      ]
    },
    uk: {
      badge: 'Книга II • 31 Липня 2026',
      title: '«Зустріч в Степу»',
      desc: 'Планета Дике Поле-17. Отаман Богдан Титар веде загін пластунів-розвідників на бот-конях з вогнеметом «Шершень» у глибокий рейд тилами Імперії Сонця, щоб знищити ворожий мельтовіз.',
      links: [
        { label: '📖 Про книгу та читання', href: '/locadesertascifi/books/Zustrich_v_Stepu.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Безкоштовно)', href: 'https://booknet.ua/book/zustrch-v-stepu-b446432', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'http://books.apple.com/us/book/id6796818751', cls: 'btn-outline btn-sm' },
        { label: '⬇️ GitHub EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/tag/encounter_in_steppe', cls: 'btn-outline btn-sm' }
      ]
    }
  },
  {
    id: 'vistrya-kulaku',
    cover: '/locadesertascifi/images/vistrya_kulaku_cover.jpg',
    en: {
      badge: 'Book III • Released July 31, 2026',
      title: '«Vistrya Kulaku» (Fist’s Edge)',
      desc: 'When elite Samanaks of the Empire of the Sun seize a warp station on an abandoned moon, 2nd-grade Terminator Ivan Donets and the Hetmanate assault regiment launch an orbital drop into a plasma-scorched labyrinth.',
      links: [
        { label: '📖 About & Read (UA)', href: '/locadesertascifi/books/Vistrya_Kulaku.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Free)', href: 'https://booknet.ua/book/vstrya-kulaku-b457200', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'http://books.apple.com/us/book/id6796759290', cls: 'btn-outline btn-sm' },
        { label: '⬇️ GitHub EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/tag/vistrya_kulaku', cls: 'btn-outline btn-sm' }
      ]
    },
    uk: {
      badge: 'Книга III • 31 Липня 2026',
      title: '«Вістря Кулаку»',
      desc: 'Коли варп-станцію на покинутому місяці захоплюють елітні саманаки Імперії Сонця, термінатор Іван Донець та ударно-штурмовий полк Федерації Гетьманату десантуються з орбіти просто у вогняну м’ясорубку.',
      links: [
        { label: '📖 Про книгу та читання', href: '/locadesertascifi/books/Vistrya_Kulaku.html', cls: 'btn-scifi btn-sm' },
        { label: '📚 Booknet (Безкоштовно)', href: 'https://booknet.ua/book/vstrya-kulaku-b457200', cls: 'btn-outline btn-sm' },
        { label: '🍎 Apple Books', href: 'http://books.apple.com/us/book/id6796759290', cls: 'btn-outline btn-sm' },
        { label: '⬇️ GitHub EPUB', href: 'https://github.com/gladimdim/locadeserta/releases/tag/vistrya_kulaku', cls: 'btn-outline btn-sm' }
      ]
    }
  }
];

// Complete Socials, Communities & Stores Directory
const SOCIAL_HUB = [
  { name: 'Steam Store', handle: 'Loca Deserta: Odesa & Games', url: 'https://store.steampowered.com/app/2637950/_/', icon: '/images/Steam_icon_logo.svg.png' },
  { name: 'Epic Games Store', handle: 'Loca Deserta: Odesa', url: 'https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b', icon: '/images/Logo_of_Epic_Store.png' },
  { name: 'Apple App Store', handle: 'Dmytro Gladkyi Developer Page', url: 'https://apps.apple.com/ua/developer/dmytro-gladkyi/id578141466', icon: '/images/appstore_icon.svg' },
  { name: 'Google Play Store', handle: 'Loca Deserta Android Apps', url: 'https://play.google.com/store/apps/dev?id=7035097424361510326', icon: '/images/playstore-icon.svg' },
  { name: 'TikTok (Author)', handle: '@dmytrogladkyi', url: 'https://tiktok.com/@dmytrogladkyi', icon: '/images/logo-tiktok.svg' },
  { name: 'TikTok (Universe)', handle: '@locadeserta', url: 'https://www.tiktok.com/@locadeserta', icon: '/images/logo-tiktok.svg' },
  { name: 'YouTube Channel', handle: '@dmytrogladkyi', url: 'https://www.youtube.com/@dmytrogladkyi', icon: '/images/youtube.svg' },
  { name: 'Telegram Channel', handle: '@locadesertachumaki (Devlog)', url: 'https://t.me/locadesertachumaki', icon: '/images/Telegram_logo.svg' },
  { name: 'Telegram Story Bot', handle: '@locadesertabot (Play in Chat)', url: 'https://t.me/locadesertabot', icon: '/images/Telegram_logo.svg' },
  { name: 'X / Twitter', handle: '@locadeserta', url: 'https://twitter.com/locadeserta', icon: '/images/Logo_of_Twitter.svg' },
  { name: 'Discord (Author & UEFN/Roblox)', handle: 'dmytrogladkyi', url: 'https://discordapp.com/users/374843758837104651', icon: '/images/discord.svg' },
  { name: 'Guilded Community', handle: 'Loca Deserta Games Server', url: 'https://www.guilded.gg/i/EA3wamqk', icon: '/images/guilded.svg' },
  { name: 'Fortnite Creator Portal', handle: '@dmytrogladkyi (9 Islands)', url: 'https://www.fortnite.com/@dmytrogladkyi', icon: '/logo.jpg' },
  { name: 'Roblox Community', handle: 'Loca Deserta Games Group', url: 'https://www.roblox.com/communities/35449027/Loca-Deserta-Games#!/about', icon: '/logo.jpg' },
  { name: 'Sci-Fi Wiki Portal', handle: 'scifi.locadeserta.com', url: 'https://scifi.locadeserta.com/', icon: '/locadesertascifi/images/cover.jpg' },
  { name: 'Settlers Web Game', handle: 'settlers.locadeserta.com', url: 'https://settlers.locadeserta.com/', icon: '/locadesertascifi/images/cover.jpg' },
  { name: 'Booknet Profile', handle: 'Read Sci-Fi Books Free', url: 'https://booknet.ua/book/zoryanii-getmanat-b442821', icon: '/locadesertascifi/images/booknet_image-min.png' },
  { name: 'Apple Books', handle: 'Star Hetmanate Series', url: 'https://books.apple.com/us/book/%D0%B7%D0%BE%D1%80%D1%8F%D0%BD%D0%B8%D0%B9-%D0%B3%D0%B5%D1%82%D1%8C%D0%BC%D0%B0%D0%BD%D0%B0%D1%82/id6752848228?ls=1', icon: '/locadesertascifi/images/applebooks_image.png' },
  { name: 'GitHub Releases & Code', handle: 'github.com/gladimdim', url: 'https://github.com/gladimdim/locadeserta', icon: '/favicons/favicon-96x96.png' },
  { name: 'Developer Blog', handle: 'gladimdim.org & Hashnode', url: 'https://gladimdim.org', icon: '/favicons/favicon-96x96.png' }
];

// Shared Layout Wrapper with Full SEO, OpenGraph, Hreflang & JSON-LD
function renderLayout({
  lang,
  title,
  description,
  canonicalPath,
  altEnPath,
  altUkPath,
  ogImage = '/assets/og/og-odesa.jpg',
  ogType = 'website',
  breadcrumbs = [],
  jsonLd = [],
  activeNav = '',
  // Pages that exist in one language only (books, devlog) must not claim a translation in hreflang
  singleLanguage = false,
  bodyContent
}) {
  const t = UI[lang];
  const homeUrl = lang === 'uk' ? '/uk/' : '/';
  const scifiUrl = lang === 'uk' ? '/locadesertascifi/' : '/locadesertascifi/index_en.html';
  const canonicalFull = `${SITE_URL}${canonicalPath}`;
  const enFull = `${SITE_URL}${altEnPath}`;
  const ukFull = `${SITE_URL}${altUkPath}`;
  const ogImgFull = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const ogImgType = /\.png$/i.test(ogImage) ? 'image/png' : 'image/jpeg';
  const hreflangLinks = singleLanguage
    ? `<link rel="alternate" hreflang="${lang}" href="${canonicalFull}">
  <link rel="alternate" hreflang="x-default" href="${canonicalFull}">`
    : `<link rel="alternate" hreflang="en" href="${enFull}">
  <link rel="alternate" hreflang="uk" href="${ukFull}">
  <link rel="alternate" hreflang="x-default" href="${enFull}">`;
  const safeTitle = title.replace(/"/g, '&quot;');
  const safeDesc = description.replace(/"/g, '&quot;');

  const breadcrumbSchema = breadcrumbs.length > 0 ? [{
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: `${SITE_URL}${b.url}`
    }))
  }] : [];

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Loca Deserta (Дике Поле)',
        alternateName: ['Всесвіт Дикого Поля', 'Loca Deserta Game Universe', 'Дике Поле Sci-Fi', 'Зоряний Гетьманат'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.jpg`
        },
        founder: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#dmytro-gladkyi`,
          name: 'Dmytro Gladkyi',
          alternateName: 'Дмитро Гладкий',
          jobTitle: 'Game Developer & Sci-Fi Author',
          url: 'https://gladimdim.org',
          sameAs: [
            'https://tiktok.com/@dmytrogladkyi',
            'https://www.youtube.com/@dmytrogladkyi',
            'https://twitter.com/locadeserta',
            'https://t.me/locadesertachumaki',
            'https://github.com/gladimdim',
            'https://www.fortnite.com/@dmytrogladkyi'
          ]
        },
        sameAs: SOCIAL_HUB.map(s => s.url)
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Loca Deserta — Ukrainian Game & Sci-Fi Universe',
        inLanguage: ['en', 'uk'],
        publisher: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalFull}#webpage`,
        url: canonicalFull,
        name: title,
        description: description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImgFull,
          width: 1200,
          height: 630
        }
      },
      ...breadcrumbSchema,
      ...jsonLd
    ]
  };

  return `<!DOCTYPE html>
<html lang="${lang}" data-theme="dark" data-alt-en="${altEnPath}" data-alt-uk="${altUkPath}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${safeDesc}">
  <meta name="author" content="Dmytro Gladkyi (Дмитро Гладкий)">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- Canonical & Bilingual Hreflang for Google & AI Search -->
  <link rel="canonical" href="${canonicalFull}">
  ${hreflangLinks}
  <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context Summary">
  <link rel="help" type="text/plain" href="/llms-full.txt" title="LLM Full Knowledge Base">

  <!-- Open Graph / Telegram / Discord / Facebook / LinkedIn -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Loca Deserta (Дике Поле)">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDesc}">
  <meta property="og:url" content="${canonicalFull}">
  <meta property="og:image" content="${ogImgFull}">
  <meta property="og:image:secure_url" content="${ogImgFull}">
  <meta property="og:image:type" content="${ogImgType}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${safeTitle}">
  <meta property="og:locale" content="${lang === 'uk' ? 'uk_UA' : 'en_US'}">
  <meta property="og:locale:alternate" content="${lang === 'uk' ? 'en_US' : 'uk_UA'}">

  <!-- Twitter / X Large Summary Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@locadeserta">
  <meta name="twitter:creator" content="@locadeserta">
  <meta name="twitter:domain" content="locadeserta.com">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDesc}">
  <meta name="twitter:image" content="${ogImgFull}">
  <meta name="twitter:image:alt" content="${safeTitle}">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
  <link rel="manifest" href="/favicons/manifest.json">
  <meta name="theme-color" content="#0a0d14">

  <!-- Self-Hosted Styles & Locale Controller -->
  <link rel="stylesheet" href="/assets/css/site.css">
  <script src="/assets/js/site.js"></script>

  <!-- Structured Data (Schema.org JSON-LD) for Google & AI Search Engines -->
  <script type="application/ld+json">
${JSON.stringify(defaultJsonLd, null, 2)}
  </script>
</head>
<body>
  <header class="site-header">
    <div class="nav-inner">
      <a href="${homeUrl}" class="brand">
        <img src="/logo.jpg" alt="Loca Deserta Logo" class="brand-logo" width="40" height="40">
        <div>
          <span>${t.siteName}</span>
          <span class="brand-subtitle">${t.siteSubtitle}</span>
        </div>
      </a>

      <nav class="nav-links" id="nav-links" aria-label="Main Navigation">
        <a href="${homeUrl}#games" class="nav-link ${activeNav === 'games' ? 'active' : ''}">${t.navGames}</a>
        <a href="${scifiUrl}" class="nav-link scifi-badge ${activeNav === 'scifi' ? 'active' : ''}">🚀 ${t.navSciFi}</a>
        <a href="${homeUrl}#ecosystems" class="nav-link">${t.navEcosystems}</a>
        <a href="${homeUrl}#socials" class="nav-link">${t.navSocials}</a>
      </nav>

      <div class="nav-actions">
        <div class="lang-switch" role="group" aria-label="Language Switcher">
          <a href="${altEnPath}?lang=en" data-set-lang="en" class="lang-btn ${lang === 'en' ? 'active' : ''}" title="Switch to English">EN</a>
          <a href="${altUkPath}?lang=uk" data-set-lang="uk" class="lang-btn ${lang === 'uk' ? 'active' : ''}" title="Перемкнути на українську">УКР</a>
        </div>
        <button type="button" id="theme-toggle" class="theme-toggle" aria-label="Toggle Light/Dark Theme" title="Toggle Theme">◐</button>
        <button type="button" id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Open Menu">☰</button>
      </div>
    </div>
  </header>

  <main>
${bodyContent}
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand" style="margin-bottom: 0.85rem;">
            <img src="/logo.jpg" alt="Loca Deserta" class="brand-logo" width="36" height="36">
            <span>${t.siteName}</span>
          </div>
          <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 340px;">
            ${t.footerTagline}
          </p>
        </div>

        <div class="footer-col">
          <h4>${t.footerGames}</h4>
          <ul class="footer-links">
            <li><a href="https://settlers.locadeserta.com">Loca Deserta: Settlers (Web/PC)</a></li>
            <li><a href="${lang === 'uk' ? '/odesa/index_uk.html' : '/odesa/'}">Loca Deserta: Odesa</a></li>
            <li><a href="${lang === 'uk' ? '/sloboda2/index_uk.html' : '/sloboda2/'}">Loca Deserta: Sloboda 2</a></li>
            <li><a href="${lang === 'uk' ? '/locadesertachumaki/' : '/locadesertachumaki/index_en.html'}">Loca Deserta: Chumaki</a></li>
            <li><a href="${lang === 'uk' ? '/citybuilding/' : '/citybuilding/index_en.html'}">Loca Deserta: Sloboda</a></li>
            <li><a href="${lang === 'uk' ? '/interactive/' : '/interactive/index_en.html'}">Interactive Stories</a></li>
            <li><a href="${lang === 'uk' ? '/locadesertahex/' : '/locadesertahex/index_en.html'}">Loca Deserta: Hex</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${t.footerSciFi}</h4>
          <ul class="footer-links">
            <li><a href="${scifiUrl}">${lang === 'uk' ? 'Портал Дике Поле Sci-Fi' : 'Loca Deserta Sci-Fi Portal'}</a></li>
            <li><a href="/locadesertascifi/books/Zoryanij_Getmanat.html">Зоряний Гетьманат (Star Hetmanate)</a></li>
            <li><a href="/locadesertascifi/books/Zustrich_v_Stepu.html">Зустріч в Степу (Encounter in Steppe)</a></li>
            <li><a href="/locadesertascifi/books/Vistrya_Kulaku.html">Вістря Кулаку (Fist's Edge)</a></li>
            <li><a href="https://scifi.locadeserta.com">Sci-Fi Lore Wiki</a></li>
            <li><a href="https://www.fortnite.com/@dmytrogladkyi">Fortnite Islands (@DmytroGladkyi)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>${t.footerLegal}</h4>
          <ul class="footer-links">
            <li><a href="/privacy_policy.html">Privacy Policy (Interactive)</a></li>
            <li><a href="/privacy_policy_for_odesa.html">Privacy Policy (Odesa)</a></li>
            <li><a href="/privacy_policy_sloboda.html">Privacy Policy (Sloboda 2)</a></li>
            <li><a href="/privacy_policy_chumaki.html">Privacy Policy (Chumaki)</a></li>
            <li><a href="/privacy_policy_hex.html">Privacy Policy (Hex)</a></li>
            <li><a href="/sloboda2_licenses.html">Sloboda 2 Licenses</a></li>
            <li><a href="/llms.txt">LLMs.txt (AI Overview)</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>${t.rights}</span>
        <span>Created by <a href="https://gladimdim.org" style="color: var(--gold);">Dmytro Gladkyi</a> • Hosted on locadeserta.com</span>
      </div>
    </div>
  </footer>

  <!-- Lightbox Modal -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image Preview">
    <button type="button" class="lightbox-close" id="lightbox-close" aria-label="Close">×</button>
    <img id="lightbox-img" src="" alt="Expanded Screenshot">
  </div>
</body>
</html>`;
}

module.exports = {
  ROOT,
  SITE_URL,
  UI,
  GAMES,
  BOOKS,
  SOCIAL_HUB,
  writePage,
  renderLayout
};
