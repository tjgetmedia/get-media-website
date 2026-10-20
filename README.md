# GET Media Productions: Website

A fast, multi-page React site built to show off the work and turn visitors into inquiries.
It uses Vite and React, has no UI framework, and deploys to GitHub Pages automatically on every push.

## Pages

| Page | URL |
|---|---|
| Home | `/#/` |
| Portfolio by category | `/#/portfolio/businesses`, `/#/portfolio/weddings`, `/#/portfolio/films` |
| Project page (one per client) | `/#/work/durasilk`, `/#/work/new-berlin-brewing`, … |
| Services · About · Contact | `/#/services`, `/#/about`, `/#/contact` |

URLs use `#/` so every page works on GitHub Pages with no server setup and survives a refresh.

## Edit content (no coding needed)

Everything lives in **`src/data/site.js`**.

**Add a client project:** copy a block in `projects`, give it a unique `slug` (that becomes its URL), and fill in:
- `category`: `businesses`, `weddings` or `films`
- `services`: the gold line under the title, e.g. `['Brand Video', 'Ad Creative']`
- `tagline` and `client`: the subtitle and "The Client" paragraph
- `parts`: one block per deliverable. Two or more parts show the "PROJECT 01 / 02" headers like the DuraSilk page. Each part has `video`, `details` (the gold label list), and `story` ("The Work")
- `gallery`: a list of photos for photo projects
- `featured: true` shows the project in "Selected Work" on the home page

**Videos:** `video: { youtube: 'ID' }` or `video: { vimeo: '123456789' }`. For an unlisted Vimeo link (`vimeo.com/123456789/ab12cd34ef`), add `hash: 'ab12cd34ef'`.
Project cards use the first video's thumbnail automatically, or set `cover: 'images/work/file.jpg'`.

Anything without a video yet shows a gold "Film coming soon" title card.

## Make the contact form deliver to your inbox

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. Paste it into `site.formEndpoint`.

Until you do, the form opens the visitor's email app with everything pre-filled to `site.email`.
Optional: set `site.bookingUrl` to a Calendly link to add a "Book a Discovery Call" button.

## Brand font

The brand guide calls for **Horizon** on headers. It isn't on Google Fonts, so add `horizon.woff2` to
`public/fonts/` and it switches on automatically. Until then, the site uses *Unbounded*, a close match.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `get-media-site`) and push this folder to the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` now builds and publishes the site. The first run takes about 1 minute; the URL appears under the Actions tab and in Settings → Pages.

### Use getmediaproductions.com

1. Add a file `public/CNAME` containing only `getmediaproductions.com`.
2. In **Settings → Pages → Custom domain**, enter `getmediaproductions.com` and enable **Enforce HTTPS**.
3. At your domain registrar (moving off Squarespace DNS if it's managed there), point the apex domain to GitHub's A records
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and add a `www` CNAME to `<your-username>.github.io`.

Before you switch DNS, make sure your email (MX records) is copied over so mail keeps working.

## Structure

```
src/
  data/site.js        ← all content
  pages/              ← Home, Portfolio, Project, Services, About, Contact
  components/         ← shared pieces (nav, footer, video player, cards, form)
  router.jsx          ← tiny hash router (no extra dependencies)
  styles.css          ← brand tokens at the top (charcoal, gold, fonts)
public/images/        ← logo, client logos, team and project photos
.github/workflows/    ← auto-deploy to GitHub Pages
```
