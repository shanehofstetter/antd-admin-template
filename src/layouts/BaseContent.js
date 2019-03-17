import React from "react";

import {Layout} from "antd";

const {Content} = Layout;

export const BaseContent = (props) => {
    return <Content style={{margin: "24px 16px 0"}}>
        <div style={{padding: 24, background: "#fff", minHeight: 360}}>
            {props.children}
        </div>
    </Content>;
};
