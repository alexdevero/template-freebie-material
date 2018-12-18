module.exports = {
  siteMetadata: {
    title: 'Material template 3.0',
    description:
      'Material – Modern, clean and beautiful Multi-Purpose HML5 and CSS3 template suitable for portfolios, landing pages, and just every kind of website.',
    author: '@alexdevero',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/material-30-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`)(),
          require(`postcss-extend`)(),
          require(`postcss-nesting`)(),
          require('postcss-responsive-type'),
          require('postcss-pxtorem')({
            mediaQuery: false,
            minPixelValue: 0,
            propWhiteList: [],
            replace: true,
            rootValue: 16,
            selectorBlackList: ['html'],
            unitPrecision: 5,
          }),
          require(`postcss-preset-env`)({ stage: 3 }),
          require(`cssnano`)(),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
