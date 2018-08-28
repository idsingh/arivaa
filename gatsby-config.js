module.exports = {
  siteMetadata: {
    title: 'Documentation',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/documentation`,
        name: "markdown-pages",
      },
    },'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
      {
          resolve: 'gatsby-plugin-babel',
          options: {
              plugins: ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
          }
      }
]
}
