# CaperEdits — video editing portfolio

A one-page portfolio site for a video editor. Open `index.html` in a browser to see it. No coding knowledge needed to update it.

## What to change

Almost everything is in **`js/projects.js`**:

1. **Your email** — replace `hello@example.com`. The contact form sends messages there.
2. **Showreel** — set `SHOWREEL` to a YouTube link, Vimeo link, or a video file in `images/` (e.g. `"images/showreel.mp4"`). It plays muted on a loop at the top.
3. **Projects** — each `{ ... },` block is one video. Copy a block to add one, delete it to remove one.
   - `video`: YouTube, Vimeo, or a file. Clicking the card plays it in a pop-up.
   - `image`: thumbnail. Leave it `""` for YouTube links and the thumbnail is fetched automatically.
   - `vertical: true` for 9:16 videos (Shorts, Reels, TikTok).
   - `category`: `youtube`, `shorts`, `music`, `commercial` or `gaming`.

In **`index.html`**:
- Your name, headline and About text.
- Your photo: replace `<span>Your photo here</span>` inside `about-photo` with `<img src="images/me.jpg" alt="Your name" />`.
- Tools list and services, if you want to change them.

Colors are at the top of `css/style.css`.

## Putting it online

Upload the whole `portfolio` folder to any static host: GitHub Pages, Netlify (drag and drop the folder) or Cloudflare Pages. All free.
