import React from 'react';
import './styles.less';
import Link from 'gatsby-link'
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function(){
	const {siteTitle} = this.props;
	return (
		<div
			className="sample-component"
		>
			<div
				style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0.4rem 0.2rem',
                }}
			>
				<h3 style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
                            color: 'white',
                            textDecoration: 'none',
                        }}
					>
                        {siteTitle}
					</Link>
				</h3>
			</div>
		</div>
	)
}
export default view;
