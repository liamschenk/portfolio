/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://liamschenk.ch",
  generateRobotsTxt: true,
  exclude: ["/studio", "/studio/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/studio",
      },
    ],
  },
};
