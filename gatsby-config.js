module.exports = {
  siteMetadata: {
    title: `اشکان فکری`,
    description: `سلام این وبلاگ شخصی من هستش و من داخلش درباره یکسری نکات و روزمرگی های خودم مینویسم.`,
    author: `اشکان فکری`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,




    // code hilighter
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
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
        display: `fullscreen`,
        icon: `./src/images/avatar-192_192.png`, // This path is relative to the root of the site.
        // icons: [
        //   {
        //     src: `./src/images/avatar-192*192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `./src/images/avatar-256*256.png`,
        //     sizes: `256x256`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `./src/images/avatar-512*512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },


    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
      },
    },

    // `gatsby-plugin-offline`,
  ],
}
