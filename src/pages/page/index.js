import Component from './main';

export default Component;
export const pageQuery = graphql`
  query pageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {        
        path
        title
      }
    }
  }
`;