/* ============================================================
   MYNDBÖNDIN ÞÍN ERU HÉR.
   Þetta er eina skráin sem þú þarft að breyta til að uppfæra síðuna.
   ============================================================ */

/* Netfangið þitt. Skilaboð úr samskiptaforminu fara hingað. */
const EMAIL = "hello@example.com";

/* ---- Sýnishorn (stóra myndbandið efst) ----
   YouTube-hlekkur, Vimeo-hlekkur eða myndbandsskrá í "images" möppunni
   (til dæmis "images/showreel.mp4").
   Hafðu það sem "" til að sýna "væntanlegt" þangað til sýnishornið er tilbúið. */
const SHOWREEL = "";

/* ---- Verkefnin þín ----
   Til að bæta við verkefni skaltu afrita einn bút (frá "{" til "},") og breyta textanum.
   Til að fjarlægja verkefni skaltu eyða bútnum. Þau fyrstu birtast fyrst.

   category  einn af: youtube, shorts, music, commercial, gaming
   video     YouTube-hlekkur, Vimeo-hlekkur eða myndbandsskrá ("images/mitt-myndband.mp4")
   image     forsíðumynd. Hafðu hana sem "" fyrir YouTube-hlekki og þá er
             myndin sótt sjálfkrafa.
   vertical  true fyrir lóðrétt myndbönd (TikTok, Reels, Shorts)
   featured  true sýnir "Valið" merki á spjaldinu                          */
const PROJECTS = [
  {
    title: "Næturakstur",
    client: "Luma (tónlistarmaður)",
    category: "music",
    duration: "3:42",
    role: "Klipping, litavinnsla, brellur",
    description:
      "Neonlýst tónlistarmyndband klippt í takt, með hraðabreytingum, ljósglömpum og blágrænum og bleikum litum.",
    video: "",
    image: "images/night-drive.svg",
    vertical: false,
    featured: true
  },
  {
    title: "48 tímar í Tókýó",
    client: "Ferðarás á YouTube",
    category: "youtube",
    duration: "14:08",
    role: "Klipping, hljóðvinnsla, textun",
    description:
      "Langt ferðamyndband með þéttri sögu, góðu tempói og hreyfanlegum kortum á milli staða.",
    video: "",
    image: "images/city-recap.svg",
    vertical: false,
    featured: false
  },
  {
    title: "Í stúdíóinu",
    client: "Hlaðvarpsbrot",
    category: "shorts",
    duration: "0:45",
    role: "Klipping, hreyfanlegur texti",
    description:
      "Lóðrétt brot úr tveggja tíma hlaðvarpi, með stórum hreyfanlegum texta sem grípur athyglina strax á fyrstu sekúndu.",
    video: "",
    image: "images/studio-session.svg",
    vertical: true,
    featured: false
  },
  {
    title: "Speedrun – bestu augnablikin",
    client: "Leikjarás",
    category: "gaming",
    duration: "9:31",
    role: "Klipping, hreyfigrafík, grín",
    description:
      "Bestu augnablikin úr leikjaspilun með aðdrætti, hljóðbrellum og grafík sem heldur löngu spili skemmtilegu.",
    video: "",
    image: "images/speedrun-edit.svg",
    vertical: false,
    featured: true
  },
  {
    title: "Vörukynning",
    client: "Lítið tæknifyrirtæki",
    category: "commercial",
    duration: "0:30",
    role: "Klipping, hreyfihönnun, litavinnsla",
    description:
      "30 sekúndna auglýsing fyrir nýja vöru, með hreinum vörumyndum, hreyfanlegu letri og styttri útgáfu fyrir samfélagsmiðla.",
    video: "",
    image: "images/product-launch.svg",
    vertical: false,
    featured: false
  },
  {
    title: "Hringferð um Ísland",
    client: "Eigið verkefni",
    category: "youtube",
    duration: "6:15",
    role: "Klipping, litavinnsla, hljóðvinnsla",
    description:
      "Kvikmyndalegt ferðamyndband tekið á síma og dróna, með köldum og dulúðlegum litum.",
    video: "",
    image: "images/vlog-iceland.svg",
    vertical: false,
    featured: false
  },
];
