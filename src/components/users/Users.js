import {Button, Table} from "antd";
import React from "react";
import {BaseContent} from "../../layouts/BaseContent";
import ButtonLink from "../common/ButtonLink";
import PageHeaderWrapper from "../../layouts/PageHeaderWrapper";
import {users} from "./data";

const Users = (props) => {

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }, {
        title: '',
        dataIndex: '',
        align: 'right',
        key: 'x',
        render: (user) => {
            return <div>
                <ButtonLink icon={'edit'} shape="circle" type="primary" href={`/users/${user.id}/edit`}/>
                <Button icon={'delete'} shape="circle" type="danger" style={{marginLeft: '10px'}}/>
            </div>;
        },
    }];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return <PageHeaderWrapper title={'Users'} extra={<ButtonLink icon={'plus'} href={"/users/create"}>Create</ButtonLink>}>
        <BaseContent>
            <Table size={'middle'} rowSelection={rowSelection} columns={columns} dataSource={users}
                   rowKey={'id'}/>
        </BaseContent>
    </PageHeaderWrapper>
};

export default Users;