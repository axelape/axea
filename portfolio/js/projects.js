/* ============================================================
   YOUR VIDEOS LIVE HERE.
   This is the only file you need to edit to update the site.
   ============================================================ */

/* Your email. The contact form sends messages here. */
const EMAIL = "hello@example.com";

/* ---- Showreel (the big video at the top) ----
   A YouTube link, a Vimeo link, or a video file in the "images" folder
   (for example "images/showreel.mp4").
   Leave it as "" to show a placeholder until your reel is ready. */
const SHOWREEL = "";

/* ---- Your projects ----
   To add a project, copy one block (from "{" to "},") and change the words.
   To remove one, delete its block. The first ones show first.

   category  one of: youtube, shorts, music, commercial, gaming
   video     a YouTube link, Vimeo link, or video file ("images/my-edit.mp4")
   image     thumbnail picture. Leave it as "" for YouTube links and the
             thumbnail is fetched automatically.
   vertical  true for 9:16 videos (TikTok, Reels, Shorts)
   featured  true shows a "Featured" tag on the card                       */
const PROJECTS = [
  {
    title: "Night Drive",
    client: "Luma (music artist)",
    category: "music",
    duration: "3:42",
    role: "Edit, color grade, VFX",
    description:
      "A neon-soaked music video cut to the beat, with speed ramps, light leaks and a teal-and-pink grade.",
    video: "",
    image: "images/night-drive.svg",
    vertical: false,
    featured: true
  },
  {
    title: "48 Hours in Tokyo",
    client: "Travel YouTube channel",
    category: "youtube",
    duration: "14:08",
    role: "Edit, sound design, captions",
    description:
      "A long-form travel vlog with a tight story, punchy pacing and custom map animations between locations.",
    video: "",
    image: "images/city-recap.svg",
    vertical: false,
    featured: false
  },
  {
    title: "Studio Session",
    client: "Podcast clips",
    category: "shorts",
    duration: "0:45",
    role: "Edit, animated captions",
    description:
      "Vertical clips cut from a two-hour podcast, with bold animated captions built to hold attention in the first second.",
    video: "",
    image: "images/studio-session.svg",
    vertical: true,
    featured: false
  },
  {
    title: "Any% Speedrun Highlights",
    client: "Gaming creator",
    category: "gaming",
    duration: "9:31",
    role: "Edit, motion graphics, memes",
    description:
      "Gameplay highlights with zooms, sound effects and on-screen graphics that keep a long run fun to watch.",
    video: "",
    image: "images/speedrun-edit.svg",
    vertical: false,
    featured: true
  },
  {
    title: "Product Launch",
    client: "Small tech brand",
    category: "commercial",
    duration: "0:30",
    role: "Edit, motion design, color",
    description:
      "A 30-second launch ad with clean product shots, kinetic type and a cut-down for social.",
    video: "",
    image: "images/product-launch.svg",
    vertical: false,
    featured: false
  },
  {
    title: "Iceland Road Trip",
    client: "Personal project",
    category: "youtube",
    duration: "6:15",
    role: "Edit, color grade, sound design",
    description:
      "A cinematic road-trip film shot on a phone and a drone, graded for a cold, moody look.",
    video: "",
    image: "images/vlog-iceland.svg",
    vertical: false,
    featured: false
  },
];
