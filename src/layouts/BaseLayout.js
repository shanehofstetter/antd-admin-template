import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import DynamicSider from "./sider/DynamicSider";
import './Header.scss';
import './BaseLayout.scss';
import Header from "./Header";

export const BaseLayout = (props) => {

    const {mobileBreakpoint = 768, siderWidth = 256} = props;

    const [isMobile, setMobile] = useState(window.innerWidth < mobileBreakpoint);
    const [isSiderCollapsed, setSiderCollapsed] = useState(false);

    useEffect(() => {
        const updateLayoutMode = () => {
            setMobile(window.innerWidth < mobileBreakpoint);
        };
        window.addEventListener('resize', updateLayoutMode);
        return () => {
            window.removeEventListener('resize', updateLayoutMode);
        }
    });

    return <Layout style={{minHeight: '100vh'}}>
        <DynamicSider isMobile={isMobile} collapsed={isSiderCollapsed}
                      onCollapseChange={() => setSiderCollapsed(!isSiderCollapsed)} width={siderWidth}/>

        <Layout>
            <Header isSiderCollapsed={isSiderCollapsed} onSiderToggle={() => setSiderCollapsed(!isSiderCollapsed)}>
            </Header>
            {props.children}
            <Layout.Footer style={{textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
            </Layout.Footer>
        </Layout>
    </Layout>
};