/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Carys Leung`,
    siteUrl: `https://www.carysleung.com`,
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-transformer-json", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/favicon.png`, //Favicon logo
    },
  },
  {
    resolve: "gatsby-plugin-styletron",
    options: {
      prefix:"_"
    }
  },
]
};