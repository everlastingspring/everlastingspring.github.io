# prashanth.dev — Portfolio

A pixel-perfect replica of prashanthdev.lovable.app built as a static multi-page website.

## Structure
```
portfolio/
├── index.html                          ← Home page
├── style.css                           ← Shared styles
├── main.js                             ← Shared JS (fade-up, nav active)
├── icon.svg                            ← App icon / favicon
├── work/
│   ├── index.html                      ← Work listing
│   ├── microservices-bank/index.html   ← Project detail
│   ├── careaware-connect/index.html
│   ├── dbs-json-engine/index.html
│   └── dbs-data-migration/index.html
├── about/index.html                    ← About page
└── contact/index.html                  ← Contact page
```

## Deploy (free options)
### Netlify (recommended — drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire `portfolio/` folder onto the page
3. Done — live in seconds!

### GitHub Pages
1. Create a new repo, push this folder as root
2. Settings → Pages → Deploy from main branch

### Vercel
1. `npm i -g vercel` then `vercel` inside the folder

## Customise
- Replace the `P` avatar in `about/index.html` with `<img src="/photo.jpg">`
- Update GitHub/LinkedIn URLs (search `everlastingspring` and `prashanthrr`)
- Add your photo as `portfolio/photo.jpg`
