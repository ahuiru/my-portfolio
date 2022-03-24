require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `ahuiru's Portfolio`,
    siteTitleAlt: `ahuiru's Portfolio`,
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    siteUrl: `https://emilia.lekoarts.de`,
    siteDescription: `This is ahuiru's portfolio site. We will update it from time to time, so please look forward to it.`,
    siteLanguage: `ja`,
    siteImage: `/banner.jpg`,
    author: `Ahuiru`,
    name: 'Ahuiru',
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/Afe_afe_crypto",
      },
      {
        name: "github",
        url: "https://github.com/ahuiru",
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: `Ahuiru`,
        location: 'Tokyo',
        socialMedia: [
          {
             title: `Twitter`,
             href: "https://twitter.com/Afe_afe_crypto"
          },
          {
            title: `Github`,
            href: `https://github.com/ahuiru`
          },
        ],
        showThemeAuthor: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahuiru`,
        short_name: `Ahuiru`,
        description: `This is ahuiru's portfolio site. We will update it from time to time, so please look forward to it.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icons: [
          {
            src: `content/assets/favicon.ico`,
            type: `image/ico`,
          },
          {
            src: `content/assets/icon.jpeg`,
            type: `image/jpeg`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
