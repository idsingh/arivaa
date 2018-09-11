import React from 'react'
import './styles.less'
import { Layout } from 'antd'
import Header from '../components/header'
import Sider from '../components/sider'

const {Content} = Layout
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {children, data} = this.props;

    return (
        <div>
            <Layout>
                <Header/>
                <Layout>
                    <Sider data = {this.getSidebar()}/>
                    <Layout>
                        <Content>
                            <div className="main-container">
                            {children()}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}
export default view
