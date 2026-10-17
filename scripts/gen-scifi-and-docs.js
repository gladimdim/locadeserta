const fs = require('fs');
const path = require('path');
const { ROOT, SITE_URL, BOOKS, renderLayout } = require('./site-core');

function simpleMarkdownToHtml(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line || line === '---' || line === 'layout: default') {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      continue;
    }

    // Image markdown ![alt](src)
    if (line.startsWith('![') && line.includes('](')) {
      if (inList) { out.push('</ul>'); inList = false; }
      const m = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (m) {
        out.push(`<figure style="margin: 1.8rem 0; text-align: center;"><img src="${m[2]}" alt="${m[1].replace(/"/g, '&quot;')}" loading="lazy" style="max-width: 100%; border-radius: 12px;"></figure>`);
        continue;
      }
    }

    // Headings
    if (line.startsWith('# ')) {
      if (inList) { out.push('</ul>'); inList = false; }
      const text = formatInline(line.slice(2));
      const id = 'ch-' + i;
      out.push(`<h2 id="${id}" style="margin-top: 2.5rem; color: var(--gold);">${text}</h2>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { out.push('</ul>'); inList = false; }
      const text = formatInline(line.slice(3));
      out.push(`<h3 style="margin-top: 2rem;">${text}</h3>`);
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { out.push('</ul>'); inList = false; }
      const text = formatInline(line.slice(4));
      out.push(`<h4>${text}</h4>`);
      continue;
    }

    // List item
    if (line.startsWith('- ')) {
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${formatInline(line.slice(2))}</li>`);
      continue;
    }

    if (inList) {
      out.push('</ul>');
      inList = false;
    }

    out.push(`<p>${formatInline(line)}</p>`);
  }

  if (inList) out.push('</ul>');
  return out.join('\n');
}

function formatInline(str) {
  return str
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function buildSciFiHubPage(lang) {
  const isUk = lang === 'uk';
  const homeUrl = isUk ? '/uk/' : '/';

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

  const loreHtml = isUk
    ? `
      <h2>Глава 0. Вступ до всесвіту «Дике Поле Sci-Fi»</h2>
      <p>Здоров, щоголе! Радий, що ти вирішив завітати до фантастичного всесвіту <strong>«Дике Поле Sci-Fi»</strong>! Це — перша серія в історії української бойової космічної фантастики. До приходу до влади гетьмана Івана Остаповича Виговського в 1657 році історія у нас і в «Дикому Полі Sci-Fi» була абсолютно ідентичною. Але він не лише зберіг Гетьманат, а й розширив його вплив і території. Згодом інші гетьмани завоювали всю Східну Європу та Балкани.</p>
      <p>У XIX столітті сформувалися три імперії, які розділили Землю: <strong>Імперія Сонця</strong> (Азія та Тихий океан), <strong>Корпоративна Республіка</strong> (обидві Америки та васальна Австралія) і наша рідна імперія — <strong>Федерація Гетьманату</strong> (уся Європа, Північна Африка, Близький Схід і Мала Азія).</p>
      <p>У 2143 році (0 рік Зоряної Ери — ЗЕ) на дослідницькій станції «Європа Юпітерна» за допомогою надважких елементів Лоренцію та Нобелію винайшли варп-двигун. Перший стрибок до Альфа Центавра завершився легендарним сигналом «Гайда!».</p>
      <h2>Марсіанський Поділ Всесвіту (33 рік ЗЕ) та Колонія «Дике Поле-17»</h2>
      <p>Після збройного «Тіґарденського інциденту» за планету Тіґарден B та ультиматуму вчених Європи Юпітерської (Михайла Сагайдака, Джека Мо та Річарда Столмана), 24 липня 33 року ЗЕ відбувся Марсіанський Поділ Всесвіту. Імперії виселилися із демілітаризованої Сонячної системи у свої сектори: Федерація Гетьманату у 91 році ЗЕ заснувала <strong>Зоряну Січ</strong> у надскупченні Діви.</p>
      <p>У 281 році Зоряної Епохи (2424 рік Старої Епохи) в найтемнішому секторі галактики було засновано засекречену колонію <strong>«Дике Поле-17»</strong> під охороною трьох полків Космічних Гайдуків. У 323 році ЗЕ зв’язок із колонією обірвався...</p>
    `
    : `
      <h2>Chapter 0. Introduction to the Loca Deserta Sci-Fi Universe</h2>
      <p>Welcome to <strong>Loca Deserta Sci-Fi (Дике Поле Sci-Fi)</strong> — the pioneering universe of Ukrainian military space fiction! Up until Hetman Ivan Vyhovskyi took power in 1657, history in our world and Loca Deserta Sci-Fi was identical. In this timeline, the Cossack Hetmanate not only survived but expanded across Eastern Europe and the Balkans.</p>
      <p>By the 19th century, three superpowers governed Earth: the <strong>Empire of the Sun</strong> (Asia & the Pacific), the <strong>Corporate Republic</strong> (the Americas & Australia), and our homeland — the <strong>Hetmanate Federation</strong> (all of Europe, North Africa, the Middle East, and Asia Minor).</p>
      <p>In 2143 AD (Year 0 of the Star Era — SE), scientists aboard the <em>Europa Jovian International Research Station</em> invented the warp drive powered by superheavy Lawrencium and Nobelium inside Jupiter's gravity well.</p>
      <h2>The Martian Division of the Universe (33 SE) & Colony "Wild Field-17"</h2>
      <p>Following the bloody Teegarden B Incident in 31 SE, the three empires signed the Martian Treaty on July 24, 33 SE, demilitarizing the Solar System and dividing deep space into three eternal sectors. In 91 SE, the Hetmanate Federation established <strong>Star Sich (Зоряна Січ)</strong> in the Virgo Supercluster.</p>
      <p>In 281 SE (2424 AD), the Hetmanate founded secret research colony <strong>"Wild Field-17" (Дике Поле-17)</strong> in a pitch-black void sector, guarded by three regiments of Space Haiduks. In 323 SE, all communication with the colony went silent...</p>
    `;

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${homeUrl}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <span>${isUk ? 'Всесвіт Дике Поле Sci-Fi' : 'Loca Deserta Sci-Fi Universe'}</span>
        </nav>

        <div class="hero-grid" style="margin-bottom: 3rem;">
          <div>
            <span class="eyebrow scifi">🚀 ${isUk ? 'Українська Бойова Космічна Фантастика • 2424 Рік' : 'Ukrainian Military Space Sci-Fi • 2424 AD'}</span>
            <h1 class="hero-title">${isUk ? 'Всесвіт Дикого Поля <span class="text-gradient-scifi">Sci-Fi</span>' : 'The Loca Deserta <span class="text-gradient-scifi">Sci-Fi</span> Universe'}</h1>
            <p class="hero-lead">
              ${isUk
                ? 'Федерація Гетьманату, Зоряна Січ у надскупченні Діви, орбітальні десанти термінаторів, пластуни на бот-конях та колонія «Дике Поле-17». Читайте книги серії безкоштовно, досліджуйте Вікі-портал та грайте в космічну стратегію Loca Deserta: Settlers!'
                : 'The Hetmanate Federation, Star Sich in the Virgo Supercluster, orbital drops by Cossack Terminators, Plastun scouts on bot-horses, and colony "Wild Field-17". Read the novels, explore the Lore Wiki, and play Loca Deserta: Settlers in your browser!'}
            </p>
            <div class="btn-group">
              <a href="https://settlers.locadeserta.com" class="btn btn-scifi">🪐 ${isUk ? 'Грати в Loca Deserta: Settlers' : 'Play Loca Deserta: Settlers'}</a>
              <a href="https://scifi.locadeserta.com" class="btn btn-outline">🌐 ${isUk ? 'Вікі-портал (scifi.locadeserta.com)' : 'Sci-Fi Lore Wiki'}</a>
              <a href="/locadesertascifi/books/Zoryanij_Getmanat.html" class="btn btn-outline">📖 ${isUk ? 'Читати «Зоряний Гетьманат»' : 'Read «Star Hetmanate»'}</a>
            </div>
          </div>
          <div>
            <img src="/locadesertascifi/images/cover.jpg" alt="Star Hetmanate Cover" style="max-height: 440px; margin: 0 auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-glow-cyan); border: 1px solid var(--border-scifi);">
          </div>
        </div>

        <h2 class="section-title" style="margin-bottom: 1.5rem;">${isUk ? 'Усі книги всесвіту «Дике Поле Sci-Fi»' : 'Novels in the Loca Deserta Sci-Fi Series'}</h2>
        <div class="timeline" style="margin-bottom: 3.5rem;">
          ${bookCardsHtml}
        </div>

        <div class="prose">
          ${loreHtml}
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Всесвіт Дикого Поля Sci-Fi — Книги «Зоряний Гетьманат», «Вістря Кулаку», «Зустріч в Степу» та Settlers' : 'Loca Deserta Sci-Fi Universe — Star Hetmanate Books & Loca Deserta: Settlers',
    description: isUk
      ? 'Українська бойова космічна фантастика Дмитра Гладкого: читайте книги «Зоряний Гетьманат», «Вістря Кулаку», «Зустріч в Степу» та грайте в космічну стратегію Loca Deserta: Settlers.'
      : 'Ukrainian military space sci-fi by Dmytro Gladkyi: explore the Star Hetmanate novels, Wild Field-17 lore, and Loca Deserta: Settlers space colony strategy game.',
    canonicalPath: isUk ? '/locadesertascifi/' : '/locadesertascifi/index_en.html',
    altEnPath: '/locadesertascifi/index_en.html',
    altUkPath: '/locadesertascifi/',
    ogImage: '/assets/og/og-scifi.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: homeUrl },
      { name: isUk ? 'Всесвіт Дике Поле Sci-Fi' : 'Loca Deserta Sci-Fi Universe', url: isUk ? '/locadesertascifi/' : '/locadesertascifi/index_en.html' }
    ],
    activeNav: 'scifi',
    bodyContent
  });
}

function buildBookPage({ filename, titleUk, titleEn, cover, ogImage, booknetUrl, appleUrl, epubUrl, descUk, descEn }) {
  const mdPath = path.join(ROOT, 'locadesertascifi', 'books', filename);
  const rawMd = fs.readFileSync(mdPath, 'utf8');
  const renderedContent = simpleMarkdownToHtml(rawMd);

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/uk/">Головна</a> <span>/</span>
          <a href="/locadesertascifi/">Всесвіт Дике Поле Sci-Fi</a> <span>/</span>
          <span>${titleUk}</span>
        </nav>

        <div class="book-card" style="margin-bottom: 2.5rem;">
          <img src="${cover}" alt="${titleUk}" class="book-cover">
          <div>
            <span class="eyebrow scifi">📖 Дике Поле Sci-Fi • Дмитро Гладкий</span>
            <h1 class="hero-title" style="font-size: 2.2rem; margin: 0.4rem 0 0.75rem;">${titleUk} <span style="font-size: 1.1rem; color: var(--text-secondary); font-weight: 400;">(${titleEn})</span></h1>
            <p class="game-card-desc">${descUk}</p>
            <div class="btn-group">
              <a href="${booknetUrl}" class="btn btn-scifi btn-sm" target="_blank" rel="noopener">📚 Читати на Booknet</a>
              <a href="${appleUrl}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">🍎 Apple Books</a>
              <a href="${epubUrl}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">⬇️ Завантажити EPUB (GitHub)</a>
              <a href="/locadesertascifi/" class="btn btn-outline btn-sm">← Усі книги Sci-Fi</a>
            </div>
          </div>
        </div>

        <article class="book-reader">
          ${renderedContent}
        </article>
      </div>
    </section>
  `;

  const outFile = filename.replace(/\.md$/, '.html');
  const canonicalPath = `/locadesertascifi/books/${outFile}`;

  return renderLayout({
    lang: 'uk',
    title: `${titleUk} (${titleEn}) — Читати книгу онлайн | Всесвіт Дике Поле Sci-Fi`,
    description: descUk,
    canonicalPath,
    altEnPath: '/locadesertascifi/index_en.html',
    altUkPath: canonicalPath,
    ogImage: ogImage || '/assets/og/og-scifi.jpg',
    ogType: 'book',
    breadcrumbs: [
      { name: 'Головна', url: '/uk/' },
      { name: 'Всесвіт Дике Поле Sci-Fi', url: '/locadesertascifi/' },
      { name: titleUk, url: canonicalPath }
    ],
    jsonLd: [
      {
        '@type': 'Book',
        name: titleUk,
        alternateName: titleEn,
        author: { '@id': `${SITE_URL}/#dmytro-gladkyi` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'uk',
        genre: ['Military Science Fiction', 'Space Opera', 'Alternate History'],
        image: `${SITE_URL}${cover}`,
        description: descUk,
        url: `${SITE_URL}${canonicalPath}`,
        sameAs: [booknetUrl, appleUrl, epubUrl]
      }
    ],
    activeNav: 'scifi',
    bodyContent
  });
}

function buildSlobodaWikiPage(lang) {
  const isUk = lang === 'uk';
  const mdFile = isUk ? 'README_UK.md' : 'README.md';
  const rawMd = fs.readFileSync(path.join(ROOT, mdFile), 'utf8');

  // Parse building sections separated by ---
  const htmlContent = simpleMarkdownToHtml(
    rawMd.replace(/\(sloboda\/assets\//g, '(/sloboda/assets/')
  );

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="${isUk ? '/uk/' : '/'}">${isUk ? 'Головна' : 'Home'}</a> <span>/</span>
          <a href="${isUk ? '/citybuilding/' : '/citybuilding/index_en.html'}">${isUk ? 'Дике Поле: Слобода' : 'Loca Deserta: Sloboda'}</a> <span>/</span>
          <span>${isUk ? 'Енциклопедія Будівель та Ресурсів' : 'Buildings & Resources Guide'}</span>
        </nav>

        <div class="section-header">
          <div>
            <span class="eyebrow">📚 ${isUk ? 'Офіційна Документація Гри' : 'Official Game Reference'}</span>
            <h1 class="section-title">${isUk ? 'Енциклопедія Будівель та Ресурсів «Дике Поле: Слобода»' : 'Loca Deserta: Sloboda — Buildings & Resources Wiki'}</h1>
            <p class="section-desc">
              ${isUk
                ? 'Повний довідник вартості будівництва, необхідних ресурсів для виробництва та ліміту робітників для кожної споруди у Слободі.'
                : 'Complete production chain requirements, construction costs, outputs, and worker capacities for every building in Loca Deserta: Sloboda.'}
            </p>
          </div>
          <a href="/sloboda/" class="btn btn-primary">▶ ${isUk ? 'Грати в Слободу Онлайн' : 'Play Sloboda Online'}</a>
        </div>

        <div class="prose" style="background: var(--bg-card); padding: 2rem 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          ${htmlContent}
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    lang,
    title: isUk ? 'Енциклопедія Будівель та Ресурсів — Дике Поле: Слобода' : 'Buildings & Production Chains Wiki — Loca Deserta: Sloboda',
    description: isUk
      ? 'Довідник усіх ресурсів та будівель гри «Дике Поле: Слобода»: Кузня, Поле, Млин, Каменярня, Конюшня, Рудня, Хата уходника, Пороховий льох, Курінь, Церква, Башта.'
      : 'User documentation and building recipes for Loca Deserta: Sloboda — Smith, Field, Mill, Quarry, Stables, Iron Mine, Trapper Cabin, Powder Cellar, Church, and Towers.',
    canonicalPath: isUk ? '/uk/sloboda-wiki.html' : '/sloboda-wiki.html',
    altEnPath: '/sloboda-wiki.html',
    altUkPath: '/uk/sloboda-wiki.html',
    ogImage: '/assets/og/og-sloboda.jpg',
    breadcrumbs: [
      { name: isUk ? 'Головна' : 'Home', url: isUk ? '/uk/' : '/' },
      { name: isUk ? 'Дике Поле: Слобода' : 'Loca Deserta: Sloboda', url: isUk ? '/citybuilding/' : '/citybuilding/index_en.html' },
      { name: isUk ? 'Енциклопедія Будівель' : 'Buildings Wiki', url: isUk ? '/uk/sloboda-wiki.html' : '/sloboda-wiki.html' }
    ],
    activeNav: 'wiki',
    bodyContent
  });
}

function buildSloboda2AlphaPage() {
  const rawMd = fs.readFileSync(path.join(ROOT, 'sloboda2', 'alpha.md'), 'utf8');
  const htmlContent = simpleMarkdownToHtml(rawMd);

  const bodyContent = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a> <span>/</span>
          <a href="/sloboda2/">Loca Deserta: Sloboda 2</a> <span>/</span>
          <span>Alpha Devlog Archive</span>
        </nav>
        <div class="prose" style="background: var(--bg-card); padding: 2rem 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          ${htmlContent}
        </div>
      </div>
    </section>
  `;

  return renderLayout({
    lang: 'en',
    title: 'Loca Deserta: Sloboda 2 — Alpha Releases & Devlog Archive',
    description: 'Historical development log and alpha release notes (#4 through #14) for Loca Deserta: Sloboda 2.',
    canonicalPath: '/sloboda2/alpha.html',
    altEnPath: '/sloboda2/alpha.html',
    altUkPath: '/sloboda2/index_uk.html',
    ogImage: '/sloboda2/images/thumbnail.png',
    activeNav: 'games',
    bodyContent
  });
}

module.exports = {
  buildSciFiHubPage,
  buildBookPage,
  buildSlobodaWikiPage,
  buildSloboda2AlphaPage
};
