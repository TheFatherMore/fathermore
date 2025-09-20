export const SITE = {
  website: "https://fathermore.vercel.app/", // replace this with your deployed domain
  author: "Ken",
  profile:
    "https://github.com/TheFatherMorehttps://yousef8.github.io/astro-paper-i18n",
  ogImage: "fathermore.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "https://github.com/yousef8/astro-paper-i18n/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
