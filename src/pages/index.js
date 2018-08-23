import React from "react";
import PostLink from '../components/post-link'
import BlogTemplate from '../templates/blogTemplate'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    markdownRemark
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <div><BlogTemplate markdownRemark = {markdownRemark}/></div>;
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