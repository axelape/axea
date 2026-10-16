# Axea Builds — website

A storefront website for selling Minecraft builds. No coding knowledge needed to update it.

## What's in here

| File | What it does |
|---|---|
| `index.html` | The page itself: headings, text, FAQ, contact section. |
| `js/builds.js` | **Your list of builds.** Names, prices, descriptions, pictures, buy links. This is the file you'll edit most. |
| `js/main.js` | Makes the page work (filters, pop-ups, contact form). You only need to change your email address here. |
| `css/style.css` | Colours, fonts and layout. |
| `images/` | Pictures of your builds. |

## Before you launch: 3 things to change

1. **Your email.** Open `js/main.js`, find the line that says `hello@example.com`, and replace it with your email. The "custom build" form sends messages there.

2. **Your pictures.** Put a screenshot of each build in the `images` folder (PNG or JPG, landscape, roughly 1200×750 pixels looks best). Then in `js/builds.js` change the `image:` line for that build to match the file name, for example `image: "images/my-castle.png"`.

3. **Buy links.** Each build has `buyUrl: "#"`. Replace `#` with the checkout link from your payment provider. Until you do, the Buy button says "Message to order" and sends people to the contact form instead.

   Easy options for selling digital files (they host the download and take payment for you):
   - **Gumroad** (gumroad.com): free to start, takes a cut per sale.
   - **Ko-fi Shop** (ko-fi.com): low fees, simple.
   - **Payhip** (payhip.com): similar to Gumroad.
   - **PayPal "Buy now" button**: works, but you'd have to send the files by hand.

## Adding or removing a build

Open `js/builds.js`. Each build is a block that starts with `{` and ends with `},`. Copy one block, paste it below, and change the words. Delete a block to remove that build.

Each block has:
- `name` — shown on the card
- `category` — one of `spawn`, `medieval`, `modern`, `fantasy`, `redstone`
- `price` — a number, no currency sign
- `size`, `version`, `includes` — shown in the details pop-up
- `description` — one or two sentences
- `image` — picture file name
- `buyUrl` — your checkout link
- `featured` — `true` adds a gold "Featured" tag, `false` doesn't

## Putting it online for free (GitHub Pages)

1. On GitHub, open the repository and go to **Settings → Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**, pick the `main` branch and `/ (root)` folder, then Save.
3. After a minute, your site is live at `https://axelape.github.io/axea/`.

You can connect your own domain name (like `axeabuilds.com`) on that same settings page later.

## Legal note

The footer already says the site isn't affiliated with Mojang or Microsoft. Keep that line. Don't use the official Minecraft logo or font on the site.
