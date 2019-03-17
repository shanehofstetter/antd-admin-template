import {Drawer} from "antd";
import AppSider from "./Sider";
import React from "react";

const DynamicSider = (props) => {

    const {
        isMobile = false,
        collapsed = false,
        width = 256,
        onCollapseChange
    } = props;

    return isMobile ? (
        <Drawer
            maskClosable
            closable={false}
            onClose={onCollapseChange}
            visible={!collapsed}
            placement="left"
            width={width}
            style={{
                padding: 0,
                height: '100vh',
            }}
        >
            <AppSider isMobile={true} collapsed={false} width={width} onCollapseChange={onCollapseChange}/>
        </Drawer>
    ) : (
        <AppSider isMobile={false} collapsed={collapsed} width={width} onCollapseChange={onCollapseChange}/>
    )
};

export default DynamicSider;
