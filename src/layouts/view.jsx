import React from 'react';
import './styles.less';
import { Button } from 'antd'
import Helmet from 'react-helmet'
import Header from '../components/header'
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function(){
	const {children,data} = this.props;
	return (
		<div>
			<Helmet
				title={data.site.siteMetadata.title}
				meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
			/>
			<Header siteTitle={data.site.siteMetadata.title} />
			<Button type="primary">Testing</Button>
			<div
				style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
			>
                {children()}
			</div>
		</div>
	)
}
export default view;
