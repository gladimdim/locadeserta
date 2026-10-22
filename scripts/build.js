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
  buildSloboda2AlphaPage
} = require('./gen-scifi-and-docs');
const {
  buildSitemap,
  buildRobotsTxt,
  buildLlmsTxt,
  buildLlmsFullTxt,
  injectWebAppSeo
} = require('./gen-seo');

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

// 9. SEO tags and crawlable text for the Flutter web games
injectWebAppSeo();

// 10. SEO & AI search files: sitemap.xml, robots.txt, llms.txt, llms-full.txt
writePage('sitemap.xml', buildSitemap());
writePage('robots.txt', buildRobotsTxt());
const llmsTxt = buildLlmsTxt();
writePage('llms.txt', llmsTxt);
writePage('llms-full.txt', buildLlmsFullTxt(llmsTxt));

console.log('All pages and SEO/AI assets built successfully!');
