import React from 'react'
import './styles.less'
import Link from 'gatsby-link'

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {siteTitle} = this.props
    return (
        <div className="header">
            <div>
                <h3>
                    <Link to="/">{siteTitle}</Link>
                </h3>
            </div>
        </div>
    )
}
export default view
