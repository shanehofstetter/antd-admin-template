import React from "react";
import PageHeaderWrapper from "./../../layouts/PageHeaderWrapper";
import {BaseContent} from "../../layouts/BaseContent";
import UserForm from "./UserForm";
import {withRouter} from "react-router";
import {users} from "./data";

const breadcrumbs = [
    {path: '', breadcrumbName: 'Dashboard'},
    {path: 'users', breadcrumbName: 'Users'},
    {path: 'edit', breadcrumbName: 'Edit User'},
];

const EditUser = (props) => {

    const userId = props.match.params.id;
    const user = users.find(u => u.id.toString() === userId.toString());

    return <PageHeaderWrapper title={'Edit User'} routes={breadcrumbs}>
        <BaseContent>
            <UserForm onCancel={() => {
                props.history.push('/users')
            }} user={user}/>
        </BaseContent>
    </PageHeaderWrapper>
};

export default withRouter(EditUser);
