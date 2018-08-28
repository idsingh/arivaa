import React from "react";
const page = (props) => {
    console.log(props);
    const {markdownRemark} = props.data;
    if(!markdownRemark){
        return null;
    }
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
};

export default page;

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