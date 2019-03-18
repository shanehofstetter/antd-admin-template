import {Button, Table} from "antd";
import React from "react";
import {BaseContent} from "../layouts/BaseContent";

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
                <Button icon={'edit'} type="primary">Edit</Button>
                <Button icon={'delete'} type="danger" style={{marginLeft: '10px'}}>Delete</Button>
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

    return <BaseContent>
        <div style={{float: 'right', marginBottom: '10px'}}>
            <Button icon={'plus'}>Create</Button>
        </div>
        <div style={{clear: 'both'}}/>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey={'id'}/>
    </BaseContent>
};

export default Users;