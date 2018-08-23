module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown-files`,
        name: "markdown-pages",
      },
    },'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
]
}
