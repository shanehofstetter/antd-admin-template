import React from "react";

import {Layout} from "antd";

const {Content} = Layout;

export const BaseContent = (props) => {
    const {
        background = '#fff',
        padding = 24
    } = props;

    return <Content style={{margin: "24px 16px 0"}}>
        <div style={{padding, background, minHeight: 360}}>
            {props.children}
        </div>
    </Content>;
};
