import React from 'react'
import './styles.less'
import { Layout, Menu } from 'antd'
import Link from "gatsby-link";
const {SubMenu} = Menu
const {Sider} = Layout
const MenuItemGroup = Menu.ItemGroup
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {children, data} = this.props;

    return (
        <Sider width={300} style={{background: '#fff'}} className={'sider'}>
            <Menu defaultSelectedKeys={['welcome']} defaultOpenKeys={['sub1']} mode="inline">
                <MenuItemGroup key="getting-started" title="Getting Started">
                    {
                        data.map((edge,index)=>{
                            return (
                                <Menu.Item key={index}>
                                    <Link to = {edge.path}>{edge.title}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </MenuItemGroup>

            </Menu>
        </Sider>
    )
}
export default view
