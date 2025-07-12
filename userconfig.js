// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Quito",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.mauve,
  },
  additionalClocks: [
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://www.youtube.com/results?search_query=", "YouTube"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://github.com/Esttven/catppuccin-startpage/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "main",
      background_url: "src/img/banners/banner_01.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "aulaVirtual",
              url: "https://auth-eva.puce.edu.ec:8443/login?service=https%3A%2F%2Fssoserver2.puce.edu.ec%2F",
              icon: "notebook",
              icon_color: palette.sapphire,
            },
            {
              name: "intranet",
              url: "https://www.puce.edu.ec/intranet/login",
              icon: "school",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "gxCorner",
              url: "https://gxcorner.games/?LANG=en&COUNTRY=US&LOCALE=en-US",
              icon: "device-gamepad-2",
              icon_color: palette.red,
            },
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "player-play",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_02.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.lavender,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "tablerIcons",
              url: "https://tabler.io/icons",
              icon: "icons",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_03.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "humbleBundle",
              url: "https://www.humblebundle.com/",
              icon: "moneybag",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "hiAnime",
              url: "https://hianime.to/home",
              icon: "torii",
              icon_color: palette.peach,
            }
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.mauve);