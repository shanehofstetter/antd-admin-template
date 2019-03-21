import React from "react";
import PageHeaderWrapper from "./../../layouts/PageHeaderWrapper";
import {BaseContent} from "../../layouts/BaseContent";
import UserForm from "./UserForm";
import {withRouter} from "react-router";

const breadcrumbs = [
    { path: '', breadcrumbName: 'Dashboard' },
    { path: 'users', breadcrumbName: 'Users' },
    { path: 'create', breadcrumbName: 'New User' },
];

const NewUser = (props) => {
    return <PageHeaderWrapper title={'New User'} routes={breadcrumbs}>
        <BaseContent>
            <UserForm onCancel={() => { props.history.push('/users') }}/>
        </BaseContent>
    </PageHeaderWrapper>
};

export default withRouter(NewUser);
