import React, { Component } from 'react';
import ComponentView  from './view';
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
    return (ComponentView.bind(this))();
  }
}

Main.displayName = "Page";
