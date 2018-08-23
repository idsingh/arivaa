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
]
}
