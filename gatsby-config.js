module.exports = {
  siteMetadata: {
    title: `ashkan fekri`,
    description: `my name is ashkanfekri and this is my personal blog.`,
    author: `ashkanfekri`,
  },
  plugins: [


    `gatsby-plugin-react-helmet`,


    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,


    /**
     // ==================================================================================
     // *************************************** meta *************************************
     // ==================================================================================
     **/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ashkanfekri`,
        short_name: `ashkanfekri`,
        start_url: `/`,
        description: 'Software engineer and open source creator. This is my digital garden.',
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    /**
     // ==================================================================================
     // *************************************** meta *************************************
     // ==================================================================================
     **/


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },







    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },




    


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },







    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
