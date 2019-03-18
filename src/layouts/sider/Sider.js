import React, {useEffect} from 'react';
import {Icon, Layout, Menu} from 'antd';
import './Sider.scss';
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";

let firstRender = true;

const Sider = (props) => {
    const {
        isMobile,
        collapsed,
        onCollapseChange,
        theme = 'light',
        width = 256
    } = props;

    useEffect(() => {
        firstRender = false;
    });

    return (
        <Layout.Sider
            width={width}
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
                <NavLink to={'/'}>
                    <div className={"logo"}>
                        <img alt="logo" src={logo}/>
                        {collapsed ? null : <h1>Admin Template</h1>}
                    </div>
                </NavLink>
            </div>

            <div className={"menuContainer"}>
                <Menu theme={theme} mode="inline" defaultSelectedKeys={[props.location.pathname]}>
                    <Menu.Item key="/users">
                        <NavLink to="/users">
                            <Icon type="user"/>
                            <span className="nav-text">Users</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/videos">
                        <NavLink to="/videos">
                            <Icon type="video-camera"/>
                            <span className="nav-text">Videos</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/items">
                        <NavLink to="/items">
                            <Icon type="shopping-cart"/>
                            <span className="nav-text">Items</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        </Layout.Sider>
    )
};


export default withRouter(Sider);
