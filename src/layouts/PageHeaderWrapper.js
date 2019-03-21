import {PageHeader} from "antd";
import React from "react";
import {NavLink} from "react-router-dom";

const PageHeaderWrapper = (props) => {

    const {title, children, routes = [], ...rest} = props;

    const itemRender = (route, params, routes, paths) => {
        const last = routes.indexOf(route) === routes.length - 1;
        if (last) {
            return <span>{route.breadcrumbName}</span>;
        } else {
            let path = paths.join('/');
            path = path.indexOf('/') === 0 ? path : '/' + path;
            return <NavLink to={path}>{route.breadcrumbName}</NavLink>;
        }
    };

    const breadcrumbOptions = { routes, itemRender};

    return <div className={'page-header-wrapper'} style={{margin: ''}}>
        <PageHeader title={title} breadcrumb={breadcrumbOptions} {...rest} style={{minHeight: '65px'}}>
        </PageHeader>
        {children}
    </div>
};

export default PageHeaderWrapper;
