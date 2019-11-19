/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Petra's Page`,
    siteUrl: `https://petras.page`,
    description: `Petra's personal site for dev projects and other geekery.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
   
        // WebApp Manifest Configuration
        appName: 'petras-page', // Inferred with your package.json
        appDescription: null,
        developerName: 'Petra Laohakul',
        developerURL: 'petras.page',
        dir: 'auto',
        lang: 'en-US',
        background: '#fbe110',
        theme_color: '#fbe110',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
   
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    }
  ]
}
