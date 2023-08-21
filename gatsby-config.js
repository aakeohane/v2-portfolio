/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Bebas Neue`,
            file: `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`,
          },
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat&display=swap`
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Inter&display=swap`
          },
        ],
      },
    },
  ],
}
