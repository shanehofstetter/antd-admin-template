import {Icon} from "antd";
import * as classnames from "classnames";
import React from "react";
import {Layout} from "antd";

const Header = (props) => {

    const {
        onSiderToggle,
        isSiderCollapsed = false
    } = props;

    return <Layout.Header style={{background: '#fff', padding: 0, boxShadow: '0 1px 4px rgba(0,21,41,.08)'}}>
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
    </Layout.Header>
};

export default Header;