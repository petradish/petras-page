/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Petra Laohakul',
    titleTemplate: '%s - Developer',
    url: `https://petras.page`,
    image: `portrait.jpg`,
    description: `Petra Laohakul, developer, Latin tutor, nerd: her personal site for dev projects and other geekery.`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
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
