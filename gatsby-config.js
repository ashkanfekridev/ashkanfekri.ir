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
        background_color: `#5096ff`,
        theme_color: `#5096ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    /**
     // ==================================================================================
     // *************************************** meta *************************************
     // ==================================================================================
     **/

    /**
     // ==================================================================================
     // *************************************** font *************************************
     // ==================================================================================
     **/

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`
      }
    },

    /**
     // ==================================================================================
     // *************************************** font *************************************
     // ==================================================================================
     **/


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
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
