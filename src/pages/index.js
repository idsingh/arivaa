import React from "react";

import PageTemplate from '../templates/pageTemplate'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    markdownRemark
  },
}) => {
  return <div><PageTemplate markdownRemark = {markdownRemark}/></div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery($path: String!) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;