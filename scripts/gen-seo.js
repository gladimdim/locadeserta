const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { ROOT, SITE_URL, GAMES, BOOKS, SOCIAL_HUB } = require('./site-core');

// Main landing page of every game (where search engines and AI agents should be sent)
const GAME_PAGES = {
  settlers: 'https://settlers.locadeserta.com',
  odesa: `${SITE_URL}/odesa/`,
  sloboda2: `${SITE_URL}/sloboda2/`,
  chumaki: `${SITE_URL}/locadesertachumaki/index_en.html`,
  sloboda1: `${SITE_URL}/citybuilding/index_en.html`,
  interactive: `${SITE_URL}/interactive/index_en.html`,
  hex: `${SITE_URL}/locadesertahex/index_en.html`
};

// Flutter web builds: their HTML is overwritten by `flutter build web`, so SEO tags are re-injected on every site build
const WEB_APPS = [
  { file: 'sloboda/index.html', path: '/sloboda/', gameId: 'sloboda1', guideEn: '/citybuilding/index_en.html', guideUk: '/citybuilding/' },
  { file: 'chumaki/index.html', path: '/chumaki/', gameId: 'chumaki', guideEn: '/locadesertachumaki/index_en.html', guideUk: '/locadesertachumaki/' },
  { file: 'hex/index.html', path: '/hex/', gameId: 'hex', guideEn: '/locadesertahex/index_en.html', guideUk: '/locadesertahex/' },
  { file: 'game/index.html', path: '/game/', gameId: 'interactive', guideEn: '/interactive/index_en.html', guideUk: '/interactive/' }
];

// lang: page language; altEn/altUk only for pages that have a real translation
const SITEMAP_PAGES = [
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
  { loc: '/locadesertascifi/books/Zoryanij_Getmanat.html', priority: '0.9' },
  { loc: '/locadesertascifi/books/Vistrya_Kulaku.html', priority: '0.8' },
  { loc: '/locadesertascifi/books/Zustrich_v_Stepu.html', priority: '0.8' },
  { loc: '/sloboda2/alpha.html', priority: '0.5' },
  { loc: '/chumaki/', priority: '0.8' },
  { loc: '/sloboda/', priority: '0.8' },
  { loc: '/game/', priority: '0.8' },
  { loc: '/hex/', priority: '0.8' }
];

const AI_AND_SEARCH_BOTS = [
  'Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot', 'YandexBot',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Meta-ExternalAgent', 'Amazonbot', 'DuckAssistBot', 'MistralAI-User', 'CCBot'
];

const today = new Date().toISOString().split('T')[0];

function locToFile(loc) {
  return loc.endsWith('/') ? `${loc.slice(1)}index.html` : loc.slice(1);
}

// Real last-modified date of the page: today if it has uncommitted changes, otherwise its last commit date
function lastModified(relFile) {
  try {
    const dirty = execFileSync('git', ['status', '--porcelain', '--', relFile], { cwd: ROOT }).toString().trim();
    if (dirty) return today;
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', relFile], { cwd: ROOT }).toString().trim() || today;
  } catch (e) {
    return today;
  }
}

function buildSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${SITEMAP_PAGES.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${lastModified(locToFile(p.loc))}</lastmod>
    <priority>${p.priority}</priority>${p.altEn ? `
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.altEn}"/>
    <xhtml:link rel="alternate" hreflang="uk" href="${SITE_URL}${p.altUk}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.altEn}"/>` : ''}
  </url>`).join('\n')}
</urlset>
`;
}

function buildRobotsTxt() {
  return `# Loca Deserta — search engines and AI agents are welcome to read, cite and summarise this site.
# AI-friendly summaries: ${SITE_URL}/llms.txt and ${SITE_URL}/llms-full.txt

User-agent: *
${AI_AND_SEARCH_BOTS.map(bot => `User-agent: ${bot}`).join('\n')}
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /family_dashboard/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

const stripLabel = label => label.replace(/^[^\p{L}\p{N}]+/u, '').trim();
const absUrl = href => (href.startsWith('http') ? href : `${SITE_URL}${href}`);
const linkList = actions => actions.map(a => `[${stripLabel(a.label)}](${absUrl(a.href)})`).join(', ');

function gamePage(game) {
  return GAME_PAGES[game.id] || absUrl(game.en.actions[0].href);
}

function buildLlmsTxt() {
  return `# Loca Deserta (Дике Поле)

> Loca Deserta (Ukrainian: «Дике Поле», "Wild Field") is an independent Ukrainian game and military sci-fi book universe by game developer and author Dmytro Gladkyi (Дмитро Гладкий, @dmytrogladkyi). It is the most active modern developer of games about Ukrainian Cossacks: 10 Cossack-era games since 2019 (3 of them in development now) in 10 genres (SICHA: Cossack Combat — pixel-art sabre duels, Eastern Wars — real-time tactics of Khmelnytsky's war, Valka: The Salt Road — chumak caravan defence, Odesa, Sloboda, Sloboda 2, Chumaki, Hex, Interactive Stories), a Roblox game, and the «Зоряний Гетьманат» (Star Hetmanate) sci-fi novel series.

The universe spans two eras:

- **Historical Cossack era**: games set in the Ukrainian Wild Field, the Zaporozhian Sich and Khadjibey (Odesa) during the 16th–17th centuries.
- **Loca Deserta Sci-Fi** («Дике Поле Sci-Fi»): an alternate history where Hetman Ivan Vyhovskyi preserved the Cossack Hetmanate in 1657, which grows into the interstellar Hetmanate Federation with its capital Star Sich in the Virgo Supercluster (25th century, Star Era 281 = 2424 AD).

The website is bilingual: English at ${SITE_URL}/ and Ukrainian at ${SITE_URL}/uk/. The books are written in Ukrainian.

## Games

${GAMES.map(g => `- [${g.en.title}](${gamePage(g)}): ${g.en.desc} Platforms: ${g.en.platforms.join(', ')}.`).join('\n')}

## Books (Loca Deserta Sci-Fi series, in Ukrainian)

${BOOKS.map(b => `- [${b.en.title} / ${b.uk.title}](${absUrl(b.en.links[0].href)}): ${b.en.desc}`).join('\n')}
- [Loca Deserta Sci-Fi hub](${SITE_URL}/locadesertascifi/index_en.html): overview of the sci-fi universe, timeline and all books.
- [Sci-Fi lore wiki](https://scifi.locadeserta.com/): factions, history and technology of the sci-fi universe.

## Play in the browser

- [Loca Deserta: Sloboda](${SITE_URL}/sloboda/): Cossack settlement strategy game.
- [Loca Deserta: Chumaki](${SITE_URL}/chumaki/): XVII-century trading simulator.
- [Loca Deserta: Interactive Stories](${SITE_URL}/game/?lang=en): branching historical stories.
- [Loca Deserta: Hex](${SITE_URL}/hex/): hexagonal strategy puzzle.

## Creator

- [Dmytro Gladkyi](https://gladimdim.org): Ukrainian game developer and sci-fi author, creator of the whole Loca Deserta universe.
- [Steam: Loca Deserta: Odesa](https://store.steampowered.com/app/2637950/_/)
- [Apple App Store developer page](https://apps.apple.com/ua/developer/dmytro-gladkyi/id578141466)
- [Google Play developer page](https://play.google.com/store/apps/dev?id=7035097424361510326)

## Optional

- [Full knowledge base](${SITE_URL}/llms-full.txt): every game and book in English and Ukrainian, sci-fi lore, Sloboda game mechanics and a list of all pages.
- [Ukrainian homepage](${SITE_URL}/uk/)
${SOCIAL_HUB.filter(s => /TikTok|YouTube|Telegram|Discord|GitHub/.test(s.name)).map(s => `- [${s.name}](${s.url}): ${s.handle}`).join('\n')}
`;
}

function buildLlmsFullTxt(llmsTxt) {
  const pageList = SITEMAP_PAGES.map(p => {
    const file = path.join(ROOT, locToFile(p.loc));
    const html = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1];
    return `- [${(title || p.loc).trim()}](${SITE_URL}${p.loc})`;
  });

  return `${llmsTxt}
---

# Detailed Knowledge Base (EN / UK)

## Games in detail

${GAMES.map(g => `### ${g.en.title} (${g.uk.title})

- Page: ${gamePage(g)}
- Type: ${g.en.badge}
- Platforms: ${g.en.platforms.join(', ')}
- Links: ${linkList(g.en.actions)}

${g.en.desc}

${g.uk.desc}
`).join('\n')}
## Books in detail

All books are written by Dmytro Gladkyi in Ukrainian and published free on Booknet, on Apple Books and as EPUB on GitHub.

${BOOKS.map(b => `### ${b.en.title} — ${b.uk.title}

- ${b.en.badge}
- Links: ${linkList(b.en.links)}

${b.en.desc}

${b.uk.desc}
`).join('\n')}
## Loca Deserta Sci-Fi lore (Всесвіт Дике Поле Sci-Fi)

- **Divergence point (1657)**: Hetman Ivan Vyhovskyi consolidates the Cossack Hetmanate and expands across Eastern Europe and the Balkans.
- **Three Earth superpowers (19th–20th century)**:
  1. **Hetmanate Federation (Федерація Гетьманату)**: Europe, North Africa, Middle East, Asia Minor.
  2. **Empire of the Sun (Імперія Сонця)**: Asia and the Pacific.
  3. **Corporate Republic (Корпоративна Республіка)**: North and South America and vassal Australia.
- **Year 0 of the Star Era (2143 AD)**: warp drive invented at the Europa Jovian International Research Station (Європа Юпітерна) using superheavy Lawrencium and Nobelium inside Jupiter's gravitational field. The first human warp flight to Alpha Centauri transmitted the signal "Гайда!" ("Haida!").
- **Teegarden Incident (31 SE) and Martian Division of the Universe (July 24, 33 SE)**: after corporate forces massacred Empire of the Sun colonists on Teegarden B, station directors Mykhailo Sahaidak, Jack Mo and Richard Stallman threatened to trigger a warp-core collapse on Europa unless the three empires demilitarised the Solar System and divided deep space into three sectors by lottery.
- **Star Sich (Зоряна Січ, 91 SE)**: capital of the Hetmanate Federation in the Virgo Supercluster.
- **Colony "Wild Field-17" (Дике Поле-17, founded 281 SE / 2424 AD)**: secret Hetmanate research colony in a pitch-black void sector guarded by three regiments of Space Haiduks (Космічні Гайдуки). Contact lost in 323 SE.

## Loca Deserta: Sloboda game mechanics (buildings)

- **Smith (Кузня)**: produces Firearms (Самопали). Requires 2 Food, 1 Iron Ore, 1 Powder. Max workers: 30.
- **Field (Поле)**: main Food producer. Max workers: 50.
- **Mill (Млин)**: converts 5 Food into 1 Money (Гроші). Max workers: 30.
- **Quarry (Каменярня)**: produces Stone from 2 Food. Max workers: 30.
- **Stables (Конюшня)**: produces Horses (Коні) from 10 Food; required to train Cossacks. Max workers: 30.
- **Iron Mine (Рудня)**: produces Iron Ore from 5 Food. Max workers: 30.
- **Trapper's Cabin (Хата уходника)**: produces Furs (Хутра) that can be sold in Kaniv. Max workers: 10.
- **Powder Cellar (Пороховий льох)**: produces Gunpowder (Порох) from 3 Food. Max workers: 30.
- **Town buildings**: Kurin / House (+3 Citizens), Church (+1 Faith), Tower / Watch Tower / Palisade Wall (Частокол) (+Defense).

## All pages on locadeserta.com

${pageList.join('\n')}
`;
}

// Search engines show ~155 characters of a description; cut at the last sentence that fits
function snippet(text, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '));
  return sentenceEnd > 80 ? cut.slice(0, sentenceEnd + 1) : `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

const escAttr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function webAppSeoBlock(app) {
  const game = GAMES.find(g => g.id === app.gameId);
  const url = `${SITE_URL}${app.path}`;
  const title = `${game.en.title} — Play Online Free | ${game.uk.title}`;
  const desc = snippet(game.en.desc);
  const image = absUrl(game.image);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.en.title,
    alternateName: game.uk.title,
    description: game.en.desc,
    url,
    image,
    inLanguage: ['uk', 'en'],
    genre: game.en.badge,
    gamePlatform: game.en.platforms,
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', '@id': `${SITE_URL}/#dmytro-gladkyi`, name: 'Dmytro Gladkyi', url: 'https://gladimdim.org' },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Loca Deserta (Дике Поле)', url: SITE_URL }
  };

  const head = `<!-- seo:start (generated by scripts/build.js) -->
    <title>${title}</title>
    <meta name="description" content="${escAttr(desc)}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Loca Deserta (Дике Поле)">
    <meta property="og:title" content="${escAttr(title)}">
    <meta property="og:description" content="${escAttr(desc)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context Summary">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <!-- seo:end -->`;

  // Flutter draws on a canvas, so crawlers that do not run JavaScript (most AI agents) see an empty page without this
  const body = `<!-- seo:start -->
  <noscript>
    <h1>${game.en.title} (${game.uk.title})</h1>
    <p>${game.en.desc}</p>
    <p lang="uk">${game.uk.desc}</p>
    <p>Platforms: ${game.en.platforms.join(', ')}. Created by Dmytro Gladkyi.</p>
    <ul>
      <li><a href="${app.guideEn}">Game guide (English)</a></li>
      <li><a href="${app.guideUk}">Опис гри (українською)</a></li>
      ${game.en.actions.filter(a => a.href.startsWith('http')).map(a => `<li><a href="${a.href}">${stripLabel(a.label)}</a></li>`).join('\n      ')}
      <li><a href="/">Loca Deserta — all games and books</a></li>
    </ul>
  </noscript>
  <!-- seo:end -->`;

  return { head, body };
}

function injectWebAppSeo() {
  for (const app of WEB_APPS) {
    const file = path.join(ROOT, app.file);
    const { head, body } = webAppSeoBlock(app);
    const html = fs.readFileSync(file, 'utf8')
      .replace(/\s*<!-- seo:start[\s\S]*?<!-- seo:end -->/g, '')
      .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
      .replace(/\s*<meta name="description"[^>]*>/i, '')
      .replace(/<html(?![^>]*\blang=)([^>]*)>/i, '<html lang="uk"$1>')
      .replace(/<head>/i, `<head>\n    ${head}`)
      .replace(/<body([^>]*)>/i, `<body$1>\n  ${body}`);
    fs.writeFileSync(file, html, 'utf8');
    console.log(`Injected SEO: ${app.file}`);
  }
}

module.exports = {
  buildSitemap,
  buildRobotsTxt,
  buildLlmsTxt,
  buildLlmsFullTxt,
  injectWebAppSeo
};
