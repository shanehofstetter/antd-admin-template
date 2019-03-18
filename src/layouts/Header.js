import {Layout, Avatar, Icon, Menu, Dropdown} from "antd";
import * as classnames from "classnames";
import React from "react";

const Header = (props) => {

    const {
        onSiderToggle,
        isSiderCollapsed = false
    } = props;

    const menu = (
        <Menu className={'user-menu'} selectedKeys={[]}>
            <Menu.Item key="userCenter">
                <Icon type="user"/>
                Account
            </Menu.Item>
            <Menu.Item key="userinfo">
                <Icon type="setting"/>
                Settings
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout">
                <Icon type="logout"/>
                Logout
            </Menu.Item>
        </Menu>
    );

    return <Layout.Header>
        <div className={'left-content'}>
            <div className={'button'}
                 onClick={onSiderToggle}
            >
                <Icon
                    type={classnames({
                        'menu-unfold': isSiderCollapsed,
                        'menu-fold': !isSiderCollapsed,
                    })}
                />
            </div>
        </div>
        <div className={'right-content'}>
            <Dropdown overlay={menu}>
            <div className={'user-menu'}>
              <Avatar
                  size="small"
                  className={'user-avatar'}
                  icon="user"
                  alt="avatar"
              />
            </div>
            </Dropdown>
        </div>
    </Layout.Header>
};

export default Header;