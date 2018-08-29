import React from 'react';
import './styles.less';
import Link from 'gatsby-link'
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function(){
	console.log(this.props)
    const {markdownRemark} = this.props.data;
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
}
export default view;
