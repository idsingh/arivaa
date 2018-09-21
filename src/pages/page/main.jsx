import React, { Component } from 'react';
import './styles.less';
import '../../static/prism.js'
import '../../static/prism.css';
/**
 * @description Page
 * @type Page
 * @author Inderdeep
 */
export default class Main extends Component {

  /**
   * Container
   * @param props
   */
  constructor(props){
    super(props);

  }
  /**
   * ComponentDidMount Hook
   */
  componentDidMount(){
     window.Prism.highlightAll()
  }
  /**
   * Render Method
   * @returns {*}
   */
  render() {
      const {markdownRemark} = this.props.data || {};
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
}

Main.displayName = "Page";
