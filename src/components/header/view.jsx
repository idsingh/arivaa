import React from 'react'
import './styles.less'
import Link from 'gatsby-link'
import { Layout, Menu, Dropdown, Button } from 'antd'
import logo from '../../assets/logo.png'

const {Header} = Layout
const menu = (
    <Menu>
        <Menu.Item>
            <a>Arivaa Basic</a>
        </Menu.Item>
        <Menu.Item>
            <a>Arivaa Firebase</a>
        </Menu.Item>
        <Menu.Item>
            <a>Arivaa Ecommerce</a>
        </Menu.Item>
    </Menu>
)
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {siteTitle} = this.props
    return (
        <Header className="header">
            <div className="logo">
                <img src={logo} alt="Arivaa"/>
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                <Menu.Item key="1">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">Documentations</a>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="2">About Us</Menu.Item>
                <Menu.Item key="3">Services</Menu.Item>
                <Menu.Item key="4">Technologies</Menu.Item>
                <Menu.Item key="5">
                    <Button type="primary">Hire Us</Button>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
export default view
