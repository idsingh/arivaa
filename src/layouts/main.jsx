import React, { Component } from 'react'
import ComponentView from './view'

/**
 * @description Index-Layout
 * @type Layout
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor (props) {
        super(props)

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount () {

    }

    /**
     * Get Sidebar
     */
    getSidebar () {
        const {data} = this.props;
        const {allMarkdownRemark} = data;

        let edges = (allMarkdownRemark || {}).edges;
        return (edges || []).map((edge)=>{
            return edge.node.frontmatter
        })
    }

    /**
     * Render Method
     * @returns {*}
     */
    render () {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Index-Layout'
