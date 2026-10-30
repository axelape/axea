# CaperEdits — safn fyrir myndbandsklippingu

Einnar síðu vefur fyrir myndbandsklippara. Opnaðu `index.html` í vafra til að skoða hann. Engin forritunarkunnátta nauðsynleg til að uppfæra hann.

## Hverju á að breyta

Nánast allt er í **`js/projects.js`**:

1. **Netfangið þitt** — skiptu út `hello@example.com`. Skilaboð úr samskiptaforminu fara þangað.
2. **Sýnishorn** — settu `SHOWREEL` sem YouTube-hlekk, Vimeo-hlekk eða myndbandsskrá í `images/` (t.d. `"images/showreel.mp4"`). Það spilast hljóðlaust í lykkju efst á síðunni.
3. **Verkefni** — hver `{ ... },` bútur er eitt myndband. Afritaðu bút til að bæta við, eyddu honum til að fjarlægja.
   - `video`: YouTube, Vimeo eða skrá. Þegar smellt er á spjaldið spilast myndbandið í glugga.
   - `image`: forsíðumynd. Hafðu hana `""` fyrir YouTube-hlekki og þá er myndin sótt sjálfkrafa.
   - `vertical: true` fyrir lóðrétt myndbönd (Shorts, Reels, TikTok).
   - `category`: `youtube`, `shorts`, `music`, `commercial` eða `gaming`.

Í **`index.html`**:
- Nafnið þitt, fyrirsögn og textinn um þig.
- Myndin þín: skiptu `<span>Myndin þín hér</span>` inni í `about-photo` út fyrir `<img src="images/eg.jpg" alt="Nafnið þitt" />`.
- Forritalistinn og þjónustan, ef þú vilt breyta þeim.

Litirnir eru efst í `css/style.css` (gulur er `--accent`).

## Setja vefinn á netið

Hladdu allri `portfolio` möppunni upp á ókeypis hýsingu: GitHub Pages, Netlify (dregur möppuna inn) eða Cloudflare Pages.
