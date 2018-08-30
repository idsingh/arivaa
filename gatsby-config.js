module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        theme: {
          'primary-color': '#1890ff'
        }
      }
    },
    {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/documentation`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`
  ]
}
