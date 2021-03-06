import React, {useEffect} from 'react';
import {Icon, Layout, Menu} from 'antd';
import './Sider.scss';
import logo from "../../logo.svg";
import {Link, NavLink} from "react-router-dom";
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

    const navLinkProps = {
        onClick: () => (isMobile && onCollapseChange) ? onCollapseChange(true) : null
    };

    const getSelectedKeys = () => {
        // from path like /users/create we generate keys: /users, /users/create
        let keys = props.location.pathname.split('/').filter(k => k.length > 0);
        if (keys.length === 0) return [];
        const selectedKeys = [];
        for (let i = 1; i <= keys.length; i++) {
            selectedKeys.push('/' + keys.slice(0, i).join('/'));
        }
        return selectedKeys;
    };

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
                <Link to={'/'}>
                    <div className={"logo"}>
                        <img alt="logo" src={logo}/>
                        {collapsed ? null : <h1>Admin Template</h1>}
                    </div>
                </Link>
            </div>

            <div className={"menu-container"}>
                <Menu theme={theme} mode="inline" selectedKeys={getSelectedKeys()}>
                    <Menu.Item key="/users">
                        <NavLink to="/users" {...navLinkProps}>
                            <Icon type="user"/>
                            <span className="nav-text">Users</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/videos">
                        <NavLink to="/videos" {...navLinkProps}>
                            <Icon type="video-camera"/>
                            <span className="nav-text">Videos</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/items">
                        <NavLink to="/items" {...navLinkProps}>
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
