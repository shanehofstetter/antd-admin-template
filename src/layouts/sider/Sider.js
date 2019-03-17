import React, {useEffect} from 'react';
import {Icon, Layout, Menu} from 'antd';
import './Sider.scss';
import logo from "../../logo.svg";

let firstRender = true;

const Sider = (props) => {
    const {
        isMobile,
        collapsed,
        onCollapseChange,
        theme = 'light'
    } = props;

    useEffect(() => {
        firstRender = false;
    });

    return (
        <Layout.Sider
            width={256}
            breakpoint="lg"
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(collapse) => {
                if (onCollapseChange && (!isMobile || firstRender)) {
                    onCollapseChange(collapse)
                }
            }}
            className={"sider"}
            theme={theme}
        >
            <div className={"brand"}>
                <div className={"logo"}>
                    <img alt="logo" src={logo}/>
                    {collapsed ? null : <h1>Admin Template</h1>}
                </div>
            </div>

            <div className={"menuContainer"}>
                <Menu theme={theme} mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user"/>
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </div>
        </Layout.Sider>
    )
};


export default Sider;
