# Claude & Claude Code — Repository Italiano

Sito statico in italiano, curato da **Giorgio Gnoli**, che raccoglie guide operative, prompt testati e setup pronti all'uso per Claude, Claude Code, Skill, MCP e Cowork.

## Struttura

```
site/
├── index.html                # Homepage
├── archivio.html             # Ricerca testuale su 34 guide
├── chi-sono.html             # Nota dell'autore
├── sitemap.xml               # Mappa del sito
├── robots.txt
├── assets/
│   ├── css/main.css          # Tema dark + tipografia system
│   └── js/main.js            # Filtro ricerca + smooth scroll TOC
├── categorie/
│   ├── index.html            # Indice categorie
│   ├── claude-base.html
│   ├── architetture.html
│   ├── setup.html
│   ├── prompt.html
│   └── team.html
└── guides/                   # 34 pagine guida
    ├── stop-pdf-claude.html  # MarkItDown in 5 minuti
    ├── harness-engineering.html
    ├── loop-engineering.html
    ├── … (altre 31 guide)
```

## Le 5 categorie

| Categoria | Cosa trovi |
| --- | --- |
| **Claude Base** | Percorso per chi inizia: 11 guide gratuite, dalla 101 ai 118 comandi di Claude Code |
| **Architetture** | Harness, loop, memoria, sub-agent, le 3 modalità, i 10 agenti finanza |
| **Setup** | Claude Code, Cowork OS, MCP, Apify, Canva, Claude Design, tool di design |
| **Prompt** | Carousel, audit Instagram, sistemi di contenuti, prompt immagini, face-lock, photo enhancer |
| **Team** | Claude for Teams, Board of Advisers, Claude Council, Cowork multiutente |

## Pubblicare

Il sito è statico (solo HTML, CSS, JS). Per pubblicarlo:

- **GitHub Pages**: committa la cartella `site/` su un repo, abilita Pages sul branch `main` con root `/`.
- **Netlify**: trascina la cartella `site/` su netlify.com/drop.
- **Vercel**: `vercel --prod` nella cartella.
- **Cloudflare Pages**: carica la cartella come progetto statico.

Per un dominio proprio, configura un CNAME: `claude.giorgiognoli.it → <provider>.net`.

## Licenza

I testi originali sono di Giorgio Gnoli e possono essere condivisi con attribuzione dell'autore e link al repository. Marchi citati (Claude, Claude Code, Anthropic, MarkItDown, Apify, Canva, Notion, GitHub) appartengono ai rispettivi proprietari.

## Note tecniche

- Layout responsive (CSS Grid, media queries a 720px e 900px).
- CSS variables per theming dark coerente.
- Sticky header e sidebar TOC su pagine guida.
- Ricerca client-side `archiveSearch` su `archivio.html` che filtra per titolo/descrizione/categoria.
- Smooth-scroll per ancore TOC.
- Meta tag autore, description, keywords, Open Graph, canonical su ogni pagina.
