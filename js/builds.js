/* ============================================================
   YOUR BUILDS LIVE HERE.
   To add a build, copy one of the blocks below (from "{" to "},")
   and change the words. To remove one, delete its block.

   category must be one of: spawn, medieval, modern, fantasy, redstone
   price     is the price in dollars, just the number (for example 6.99)
   image     is the picture file inside the "images" folder
   buyUrl    is the link to your checkout page (PayPal, Gumroad, Ko-fi, etc.)
   featured  true shows a gold "Featured" tag on the card
   ============================================================ */

/* ---- Hero video ----
   Put your video file in the "images" folder and write its name here,
   for example "images/showreel.mp4". A YouTube link also works, for
   example "https://www.youtube.com/watch?v=XXXXXXXX".
   Leave it as "" to show the placeholder until your video is ready. */
const HERO_VIDEO = "";

const BUILDS = [
  {
    id: "kingsreach-spawn",
    name: "Kingsreach Spawn Hub",
    category: "spawn",
    price: 9.99,
    size: "180 × 180 blocks",
    version: "Java 1.16 – 1.21 · Bedrock ready",
    includes: ".schem, world save, install guide",
    description:
      "A grand medieval spawn with a central plaza, shop stalls, NPC rooms and four themed exits. Built for survival and towny servers that want a strong first impression.",
    image: "images/kingsreach-spawn.svg",
    buyUrl: "#",
    featured: true
  },
  {
    id: "ironhold-castle",
    name: "Ironhold Castle",
    category: "medieval",
    price: 6.99,
    size: "140 × 120 blocks",
    version: "Java 1.16 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "A fortified hilltop castle with a working portcullis, throne room, barracks and dungeon. Fully furnished interiors.",
    image: "images/ironhold-castle.svg",
    buyUrl: "#",
    featured: false
  },
  {
    id: "harbor-town",
    name: "Saltmarsh Harbor Town",
    category: "medieval",
    price: 9.99,
    size: "260 × 200 blocks",
    version: "Java 1.18 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "A lived-in fishing town with 24 houses, a lighthouse, docks with three ships, and a market square. Perfect as a starter town or quest hub.",
    image: "images/harbor-town.svg",
    buyUrl: "#",
    featured: true
  },
  {
    id: "skyline-penthouse",
    name: "Skyline Penthouse",
    category: "modern",
    price: 4.99,
    size: "60 × 60 blocks",
    version: "Java 1.17 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "A glass-and-concrete modern mansion with rooftop pool, garage and open-plan interior. Clean lines, big windows, great for city servers.",
    image: "images/skyline-penthouse.svg",
    buyUrl: "#",
    featured: false
  },
  {
    id: "neon-lobby",
    name: "Neon District Lobby",
    category: "spawn",
    price: 6.99,
    size: "120 × 120 blocks",
    version: "Java 1.16 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "A cyberpunk minigame lobby with glowing signage, portal plaza and parkour course. Designed for network hubs.",
    image: "images/neon-lobby.svg",
    buyUrl: "#",
    featured: false
  },
  {
    id: "elder-tree",
    name: "The Elder Tree",
    category: "fantasy",
    price: 6.99,
    size: "90 × 90 blocks, 110 tall",
    version: "Java 1.18 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "A giant ancient tree with winding stairs, treehouse rooms and a hidden grove at the roots. A showpiece for any fantasy world.",
    image: "images/elder-tree.svg",
    buyUrl: "#",
    featured: false
  },
  {
    id: "floating-isles",
    name: "Floating Isles Sanctuary",
    category: "fantasy",
    price: 9.99,
    size: "200 × 160 blocks",
    version: "Java 1.18 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "Five sky islands linked by bridges, with a temple, waterfalls and a dragon roost. Ideal for skyblock spawns or adventure maps.",
    image: "images/floating-isles.svg",
    buyUrl: "#",
    featured: false
  },
  {
    id: "auto-farm-complex",
    name: "Automatic Farm Complex",
    category: "redstone",
    price: 4.99,
    size: "48 × 48 blocks",
    version: "Java 1.19 – 1.21",
    includes: ".schem, world save, install guide",
    description:
      "Six stacked automatic farms (crops, sugar cane, iron, honey, bamboo, melon) with sorted storage. Tested and lag-friendly.",
    image: "images/auto-farm.svg",
    buyUrl: "#",
    featured: false
  }
];
