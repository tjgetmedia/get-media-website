# GET Media Productions: Website

A fast, single-page React site built to show off the work and turn visitors into inquiries.
It uses Vite and React, has no UI framework, and deploys to GitHub Pages automatically on every push.

## Edit content (no coding needed)

Everything lives in **`src/data/site.js`**: copy, projects, services, FAQ, email, and the form options.

| To do this | Change this in `site.js` |
|---|---|
| Add a video to a project | `youtube: 'VIDEO_ID'` (or `vimeo: '123456789'`) |
| Add a photo to a project | Put the image in `public/images/work/` and set `image: 'images/work/file.jpg'` |
| Add a new project | Copy one block in the `work` list and change it |
| Add the DuraSilk films | `caseStudy.projects[].youtube` |
| Change the hero background or reel | `hero.backgroundYoutube` / `hero.reelYoutube` |
| Add a client logo | Put a transparent PNG in `public/images/clients/` and add `logo:` (use `tone: 'dark'` for black logos) |
| Social links | `site.socials` (empty links stay hidden) |

Projects with no video or photo yet show a branded gold title card, so the grid never looks empty.

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
  components/         ← one file per section
  styles.css          ← brand tokens at the top (charcoal, gold, fonts)
public/images/        ← logo, client logos, team and project photos
.github/workflows/    ← auto-deploy to GitHub Pages
```
