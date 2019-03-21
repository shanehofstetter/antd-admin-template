import React from "react";
import PageHeaderWrapper from "./../../layouts/PageHeaderWrapper";
import {BaseContent} from "../../layouts/BaseContent";
import UserForm from "./UserForm";
import {withRouter} from "react-router";

const breadcrumbs = [
    { path: '', breadcrumbName: 'Dashboard' },
    { path: 'users', breadcrumbName: 'Users' },
    { path: 'edit', breadcrumbName: 'Edit User' },
];

const EditUser = (props) => {

    const user = { nickname: 'walter.meier' };

    return <PageHeaderWrapper title={'Edit User'} routes={breadcrumbs}>
        <BaseContent>
            <UserForm onCancel={() => { props.history.push('/users') }} user={user}/>
        </BaseContent>
    </PageHeaderWrapper>
};

export default withRouter(EditUser);
