#!/usr/bin/env node
/**
 * Main Build Script for locadeserta.com
 * Generates all static EN + UK pages, SEO files (sitemap.xml, robots.txt), and AI Search files (llms.txt, llms-full.txt).
 */

const { SITE_URL, writePage } = require('./site-core');
const { buildHomePage } = require('./gen-home');
const {
  buildOdesaPage,
  buildSloboda2Page,
  buildChumakiPage,
  buildCitybuildingPage,
  buildInteractivePage,
  buildHexPage
} = require('./gen-games');
const {
  buildSciFiHubPage,
  buildBookPage,
  buildSlobodaWikiPage,
  buildSloboda2AlphaPage
} = require('./gen-scifi-and-docs');

// 1. Homepages (Default EN at /, Ukrainian at /uk/ + backward-compatible aliases)
const homeEn = buildHomePage('en');
const homeUk = buildHomePage('uk');
writePage('index.html', homeEn);
writePage('index_en.html', homeEn);
writePage('uk/index.html', homeUk);
writePage('index_uk.html', homeUk);
writePage('all_games.html', homeEn);
writePage('all_games_uk.html', homeUk);

// 2. Odesa (EN default at /odesa/, UK at /odesa/index_uk.html)
writePage('odesa/index.html', buildOdesaPage('en'));
writePage('odesa/index_uk.html', buildOdesaPage('uk'));

// 3. Sloboda 2 (EN default at /sloboda2/, UK at /sloboda2/index_uk.html, Alpha archive at /sloboda2/alpha.html)
writePage('sloboda2/index.html', buildSloboda2Page('en'));
writePage('sloboda2/index_uk.html', buildSloboda2Page('uk'));
writePage('sloboda2/alpha.html', buildSloboda2AlphaPage());

// 4. Chumaki (UK at /locadesertachumaki/index.html, EN at /locadesertachumaki/index_en.html — both have automatic browser locale switching!)
writePage('locadesertachumaki/index.html', buildChumakiPage('uk'));
writePage('locadesertachumaki/index_en.html', buildChumakiPage('en'));

// 5. Sloboda 1 / Citybuilding (UK at /citybuilding/index.html, EN at /citybuilding/index_en.html)
writePage('citybuilding/index.html', buildCitybuildingPage('uk'));
writePage('citybuilding/index_en.html', buildCitybuildingPage('en'));

// 6. Interactive Stories (UK at /interactive/index.html, EN at /interactive/index_en.html)
writePage('interactive/index.html', buildInteractivePage('uk'));
writePage('interactive/index_en.html', buildInteractivePage('en'));

// 7. Hex (UK at /locadesertahex/index.html, EN at /locadesertahex/index_en.html)
writePage('locadesertahex/index.html', buildHexPage('uk'));
writePage('locadesertahex/index_en.html', buildHexPage('en'));

// 8. Sci-Fi Portal & Books
writePage('locadesertascifi/index.html', buildSciFiHubPage('uk'));
writePage('locadesertascifi/index_en.html', buildSciFiHubPage('en'));

writePage(
  'locadesertascifi/books/Zoryanij_Getmanat.html',
  buildBookPage({
    filename: 'Zoryanij_Getmanat.md',
    titleUk: 'Зоряний Гетьманат',
    titleEn: 'Star Hetmanate',
    cover: '/locadesertascifi/images/cover.jpg',
    ogImage: '/assets/og/og-zoryanij.jpg',
    booknetUrl: 'https://booknet.ua/book/zoryanii-getmanat-b442821',
    appleUrl: 'https://books.apple.com/us/book/%D0%B7%D0%BE%D1%80%D1%8F%D0%BD%D0%B8%D0%B9-%D0%B3%D0%B5%D1%82%D1%8C%D0%BC%D0%B0%D0%BD%D0%B0%D1%82/id6752848228?ls=1',
    epubUrl: 'https://github.com/gladimdim/locadeserta/releases/download/space-getmanate/Zoryanij_Getmanat.epub',
    descUk: 'Перша книга в історії української бойової космічної фантастики! Історія про Федерацію Гетьманату, винайдення варп-двигуна на Європі Юпітерській, Марсіанський Поділ Всесвіту та таємничу колонію «Дике Поле-17» під охороною Космічних Гайдуків.',
    descEn: 'The first book in the Loca Deserta Sci-Fi universe: the rise of the Hetmanate Federation, the Martian Division of the Universe, and secret colony Wild Field-17.'
  })
);

writePage(
  'locadesertascifi/books/Vistrya_Kulaku.html',
  buildBookPage({
    filename: 'Vistrya_Kulaku.md',
    titleUk: 'Вістря Кулаку',
    titleEn: "Fist's Edge",
    cover: '/locadesertascifi/images/vistrya_kulaku_cover.jpg',
    ogImage: '/assets/og/og-vistrya.jpg',
    booknetUrl: 'https://booknet.ua/book/vstrya-kulaku-b457200',
    appleUrl: 'http://books.apple.com/us/book/id6796759290',
    epubUrl: 'https://github.com/gladimdim/locadeserta/releases/tag/vistrya_kulaku',
    descUk: 'Історія про термінаторів другого ступеня Федерації Гетьманату (Івана Донця), орбітальні десанти на захоплену саманаками Імперії Сонця варп-станцію та братерство, обпалене вакуумом і плазмою.',
    descEn: 'A military sci-fi story about Hetmanate Federation Terminators conducting an orbital drop onto a moon warp-station seized by the Empire of the Sun.'
  })
);

writePage(
  'locadesertascifi/books/Zustrich_v_Stepu.html',
  buildBookPage({
    filename: 'Zustrich_v_Stepu.md',
    titleUk: 'Зустріч в Степу',
    titleEn: 'Encounter in the Steppe',
    cover: '/locadesertascifi/images/zustrich_v_stepu_cover.jpg',
    ogImage: '/assets/og/og-zustrich.jpg',
    booknetUrl: 'https://booknet.ua/book/zustrch-v-stepu-b446432',
    appleUrl: 'http://books.apple.com/us/book/id6796818751',
    epubUrl: 'https://github.com/gladimdim/locadeserta/releases/tag/encounter_in_steppe',
    descUk: 'Планета Дике Поле-17. Отаман Богдан Титар веде загін пластунів-розвідників на бот-конях з важким вогнеметом «Шершень» у рейд тилами Імперії Сонця, щоб знищити ворожий мельтовіз.',
    descEn: 'Planet Wild Field-17: Otaman Bohdan Tytar leads Cossack Plastun scouts on bot-horses behind Empire of the Sun lines.'
  })
);

// 9. Sloboda Wiki / User Docs
writePage('sloboda-wiki.html', buildSlobodaWikiPage('en'));
writePage('uk/sloboda-wiki.html', buildSlobodaWikiPage('uk'));

// 10. Generate Sitemap.xml with xhtml:link hreflang annotations
const pagesForSitemap = [
  { loc: '/', altEn: '/', altUk: '/uk/', priority: '1.0' },
  { loc: '/uk/', altEn: '/', altUk: '/uk/', priority: '1.0' },
  { loc: '/odesa/', altEn: '/odesa/', altUk: '/odesa/index_uk.html', priority: '0.9' },
  { loc: '/odesa/index_uk.html', altEn: '/odesa/', altUk: '/odesa/index_uk.html', priority: '0.9' },
  { loc: '/sloboda2/', altEn: '/sloboda2/', altUk: '/sloboda2/index_uk.html', priority: '0.9' },
  { loc: '/sloboda2/index_uk.html', altEn: '/sloboda2/', altUk: '/sloboda2/index_uk.html', priority: '0.9' },
  { loc: '/locadesertachumaki/index_en.html', altEn: '/locadesertachumaki/index_en.html', altUk: '/locadesertachumaki/', priority: '0.9' },
  { loc: '/locadesertachumaki/', altEn: '/locadesertachumaki/index_en.html', altUk: '/locadesertachumaki/', priority: '0.9' },
  { loc: '/citybuilding/index_en.html', altEn: '/citybuilding/index_en.html', altUk: '/citybuilding/', priority: '0.9' },
  { loc: '/citybuilding/', altEn: '/citybuilding/index_en.html', altUk: '/citybuilding/', priority: '0.9' },
  { loc: '/interactive/index_en.html', altEn: '/interactive/index_en.html', altUk: '/interactive/', priority: '0.8' },
  { loc: '/interactive/', altEn: '/interactive/index_en.html', altUk: '/interactive/', priority: '0.8' },
  { loc: '/locadesertahex/index_en.html', altEn: '/locadesertahex/index_en.html', altUk: '/locadesertahex/', priority: '0.8' },
  { loc: '/locadesertahex/', altEn: '/locadesertahex/index_en.html', altUk: '/locadesertahex/', priority: '0.8' },
  { loc: '/locadesertascifi/index_en.html', altEn: '/locadesertascifi/index_en.html', altUk: '/locadesertascifi/', priority: '0.9' },
  { loc: '/locadesertascifi/', altEn: '/locadesertascifi/index_en.html', altUk: '/locadesertascifi/', priority: '0.9' },
  { loc: '/locadesertascifi/books/Zoryanij_Getmanat.html', altEn: '/locadesertascifi/index_en.html', altUk: '/locadesertascifi/books/Zoryanij_Getmanat.html', priority: '0.9' },
  { loc: '/locadesertascifi/books/Vistrya_Kulaku.html', altEn: '/locadesertascifi/index_en.html', altUk: '/locadesertascifi/books/Vistrya_Kulaku.html', priority: '0.8' },
  { loc: '/locadesertascifi/books/Zustrich_v_Stepu.html', altEn: '/locadesertascifi/index_en.html', altUk: '/locadesertascifi/books/Zustrich_v_Stepu.html', priority: '0.8' },
  { loc: '/sloboda-wiki.html', altEn: '/sloboda-wiki.html', altUk: '/uk/sloboda-wiki.html', priority: '0.7' },
  { loc: '/uk/sloboda-wiki.html', altEn: '/sloboda-wiki.html', altUk: '/uk/sloboda-wiki.html', priority: '0.7' },
  { loc: '/chumaki/', altEn: '/chumaki/', altUk: '/chumaki/', priority: '0.8' },
  { loc: '/sloboda/', altEn: '/sloboda/', altUk: '/sloboda/', priority: '0.8' },
  { loc: '/game/', altEn: '/game/?lang=en', altUk: '/game/?lang=uk', priority: '0.8' },
  { loc: '/hex/', altEn: '/hex/', altUk: '/hex/', priority: '0.8' }
];

const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pagesForSitemap.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.altEn}"/>
    <xhtml:link rel="alternate" hreflang="uk" href="${SITE_URL}${p.altUk}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.altEn}"/>
  </url>`).join('\n')}
</urlset>
`;
writePage('sitemap.xml', sitemapXml);

// 11. Generate robots.txt (explicitly welcoming Google, Bing, and AI Search Crawlers)
const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
writePage('robots.txt', robotsTxt);

// 12. Generate llms.txt & llms-full.txt for AI Search Engines (ChatGPT, Perplexity, Claude, Gemini)
const llmsTxt = `# Loca Deserta (Дике Поле) — Ukrainian Game & Sci-Fi Universe

> Loca Deserta (Ukrainian: "Дике Поле" / "Wild Field") is an independent Ukrainian video game and military space sci-fi book universe created by developer and author Dmytro Gladkyi (@dmytrogladkyi). Official website: https://locadeserta.com

## Overview
The Loca Deserta universe spans two interconnected eras:
1. **Historical XVII-Century Cossack Era ("Дике Поле")**: Video games set in the Ukrainian Wild Field, Zaporozhian Sich, and Khadjibey-Odesa during the 16th and 17th centuries.
2. **Loca Deserta Sci-Fi ("Дике Поле Sci-Fi" / "Зоряний Гетьманат")**: An alternate-history 25th-century (2424 AD / 281 Star Era) military space opera where Hetman Ivan Vyhovskyi preserved and expanded the Cossack Hetmanate into the interstellar **Hetmanate Federation** with its capital at **Star Sich** in the Virgo Supercluster.

## Games in the Loca Deserta Universe
- **Loca Deserta: Settlers (2026)** — Macro-economic space colony builder inspired by The Settlers III/IV set in the Loca Deserta Sci-Fi universe. Play free in browser at https://settlers.locadeserta.com or download Windows/macOS/Linux builds at https://github.com/gladimdim/LocaDeserta_Settlers/releases
- **Loca Deserta: Odesa (Дике Поле: Одеса)** — Adventure, crafting, and quest RPG about settling Khadjibey-Odesa in southern Ukraine. Features 70+ interconnected quests, 5 buried Ukrainian treasures, and 100% Ukrainian & English voice acting. Available on Steam (https://store.steampowered.com/app/2637950/_/), Epic Games Store (https://store.epicgames.com/en-US/p/loca-deserta-odesa-3f480b), iOS App Store, and Google Play. Page: https://locadeserta.com/odesa/
- **Loca Deserta: Sloboda 2 (Дике Поле: Слобода 2)** — 3D low-poly settlement builder and production chain simulator set in the Zaporozhian Host. Features 40+ buildings with 3 upgrade tiers, 14 production chains, 6 valleys, 35+ quests, and gamepad support. Page: https://locadeserta.com/sloboda2/
- **Loca Deserta: Chumaki (Дике Поле: Чумаки)** — XVII-century Ukrainian merchant/trader simulator across 25+ historical towns on the Boplan map. Play online at https://locadeserta.com/chumaki/ or read guide at https://locadeserta.com/locadesertachumaki/index_en.html
- **Loca Deserta: Sloboda (Дике Поле: Слобода)** — Classic city-building and seasonal strategy game at the edge of the Great Meadow with a global online Zaporozhian Sich hub and 24 random events. Play online at https://locadeserta.com/sloboda/ or read guide at https://locadeserta.com/citybuilding/index_en.html
- **Loca Deserta: Interactive Stories (Дике Поле: Інтерактивні Історії)** — Branching historical interactive fiction with 9+ stories (including "After the Battle" with 18 endings, "Khotyn Massacre", "Bloody Trap at Zhovti Vody", "Kodak Night") + cross-platform Story Creator and Telegram bot (@locadesertabot). Play online at https://locadeserta.com/game/?lang=en
- **Loca Deserta: Hex (Дике Поле: Ґекс)** — Hexagonal strategy and resource puzzle game. Play online at https://locadeserta.com/hex/
- **Loca Deserta in Fortnite** — 9 published custom UEFN Fortnite Islands by creator @DmytroGladkyi: https://www.fortnite.com/@dmytrogladkyi
- **Loca Deserta in Roblox** — 20v20 multiplayer team shooter (Cossacks vs. Tatars, Assault on Kerch): https://www.roblox.com/games/105150009083536/Loca-Deserta-DEV-0-0-5

## Books in the Loca Deserta Sci-Fi Series (by Dmytro Gladkyi)
- **Book 1: «Zoryanij Hetmanat» (Зоряний Гетьманат / Star Hetmanate)** — Full text online: https://locadeserta.com/locadesertascifi/books/Zoryanij_Getmanat.html | Booknet: https://booknet.ua/book/zoryanii-getmanat-b442821 | Apple Books: https://books.apple.com/us/book/id6752848228
- **Book 2: «Zustrich v Stepu» (Зустріч в Степу / Encounter in the Steppe, 2026)** — About Cossack Plastun scouts on bot-horses on planet Wild Field-17. Page: https://locadeserta.com/locadesertascifi/books/Zustrich_v_Stepu.html | Booknet: https://booknet.ua/book/zustrch-v-stepu-b446432 | Apple Books: http://books.apple.com/us/book/id6796818751
- **Book 3: «Vistrya Kulaku» (Вістря Кулаку / Fist's Edge, 2026)** — About Hetmanate Federation Terminators conducting orbital drops against the Empire of the Sun. Page: https://locadeserta.com/locadesertascifi/books/Vistrya_Kulaku.html | Booknet: https://booknet.ua/book/vstrya-kulaku-b457200 | Apple Books: http://books.apple.com/us/book/id6796759290
- **Sci-Fi Lore Wiki Portal**: https://scifi.locadeserta.com/

## Official Author & Social Links
- Creator: Dmytro Gladkyi (Дмитро Гладкий)
- Website (EN): https://locadeserta.com/
- Website (UK): https://locadeserta.com/uk/
- Full AI Knowledge Base: https://locadeserta.com/llms-full.txt
- TikTok: https://tiktok.com/@dmytrogladkyi & https://www.tiktok.com/@locadeserta
- YouTube: https://www.youtube.com/@dmytrogladkyi
- Telegram Channel: https://t.me/locadesertachumaki
- Telegram Interactive Story Bot: https://t.me/locadesertabot
- X / Twitter: https://twitter.com/locadeserta
- Discord: https://discordapp.com/users/374843758837104651 (dmytrogladkyi)
- Guilded: https://www.guilded.gg/i/EA3wamqk
- GitHub: https://github.com/gladimdim/locadeserta
`;
writePage('llms.txt', llmsTxt);

const llmsFullTxt = `${llmsTxt}

---

# Detailed Lore & Knowledge Base (EN / UK)

## 1. Loca Deserta Sci-Fi Lore (Всесвіт Дике Поле Sci-Fi)
- **Divergence Point (1657)**: Hetman Ivan Vyhovskyi consolidates the Cossack Hetmanate and expands across Eastern Europe and the Balkans.
- **Three Earth Superpowers (19th–20th Century)**:
  1. **Hetmanate Federation (Федерація Гетьманату)**: Europe, North Africa, Middle East, Asia Minor.
  2. **Empire of the Sun (Імперія Сонця)**: Asia and the Pacific.
  3. **Corporate Republic (Корпоративна Республіка)**: North & South America and vassal Australia.
- **Year 0 Star Era (2143 AD)**: Warp drive invented at the Europa Jovian International Research Station (Європа Юпітерна) using superheavy Lawrencium and Nobelium inside Jupiter's gravitational field. First human warp flight to Alpha Centauri transmitted the historic signal "Гайда!" ("Haida!").
- **Teegarden Incident (31 SE) & Martian Division of the Universe (July 24, 33 SE)**: After corporate forces massacred Empire of the Sun colonists on Teegarden B, station directors Mykhailo Sahaidak, Jack Mo, and Richard Stallman threatened to trigger a warp-core collapse on Europa unless the three empires demilitarized the Solar System and divided deep space into three sectors by lottery.
- **Star Sich (Зоряна Січ, 91 SE)**: Capital of the Hetmanate Federation in the Virgo Supercluster.
- **Colony "Wild Field-17" (Дике Поле-17, founded 281 SE / 2424 AD)**: Secret Hetmanate research colony in a pitch-black void sector guarded by three regiments of Space Haiduks (Космічні Гайдуки). Contact lost in 323 SE.

## 2. Detailed Game Mechanics & Buildings (Loca Deserta: Sloboda)
- **Smith (Кузня)**: Produces Firearms (Самопали). Requires 2 Food, 1 Iron Ore, 1 Powder. Max workers: 30.
- **Field (Поле)**: Main Food producer. Max workers: 50.
- **Mill (Млин)**: Converts 5 Food into 1 Money (Гроші). Max workers: 30.
- **Quarry (Каменярня)**: Produces Stone from 2 Food. Max workers: 30.
- **Stables (Конюшня)**: Produces Horses (Коні) from 10 Food; required to train Cossacks. Max workers: 30.
- **Iron Mine (Рудня)**: Produces Iron Ore from 5 Food. Max workers: 30.
- **Trapper's Cabin (Хата уходника)**: Produces Furs (Хутра) that can be sold in Kaniv. Max workers: 10.
- **Powder Cellar (Пороховий льох)**: Produces Gunpowder (Порох) from 3 Food. Max workers: 30.
- **Town Buildings**: Kurin / House (+3 Citizens), Church (+1 Faith), Tower / Watch Tower (Хфігура) / Palisade Wall (Частокол) (+Defense).
`;
writePage('llms-full.txt', llmsFullTxt);

console.log('All pages and SEO/AI assets built successfully!');

