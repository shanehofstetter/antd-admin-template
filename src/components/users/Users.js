import {Button, Table} from "antd";
import React from "react";
import {BaseContent} from "../../layouts/BaseContent";
import ButtonLink from "../common/ButtonLink";
import PageHeaderWrapper from "../../layouts/PageHeaderWrapper";

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
                <Button icon={'edit'} shape="circle" type="primary"/>
                <Button icon={'delete'} shape="circle" type="danger" style={{marginLeft: '10px'}}/>
            </div>;
        },
    }];

    const data = [{
        id: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        id: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        id: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        id: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
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
            <Table size={'middle'} rowSelection={rowSelection} columns={columns} dataSource={data}
                   rowKey={'id'}/>
        </BaseContent>
    </PageHeaderWrapper>
};

export default Users;