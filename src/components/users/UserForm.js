import {
    Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button,
} from 'antd';
import React from "react";
import {mapModelAttributesToFormFields} from "../../utils/form";
import FileInput from "../common/FileInput";

const {Option} = Select;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log('Received values of form: ', values);
            if (!err) {
                console.log('form is valid')
            }
        });
    };

    handleCancel = (e) => {
        e.preventDefault();
        if (this.props.onCancel) {
            this.props.onCancel(e);
        }
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 18},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 18,
                    offset: 6,
                },
            },
        };

        const fullWidthLayout = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
            }
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Form {...formItemLayout} labelAlign={'left'} onSubmit={this.handleSubmit}>
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input/>
                    )}
                </Form.Item>
                <Form.Item label="Password">
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input.Password type="password"/>
                    )}
                </Form.Item>
                <Form.Item label="Confirm Password">
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input.Password type="password" onBlur={this.handleConfirmBlur}/>
                    )}
                </Form.Item>
                <Form.Item
                    label={(<span>Nickname&nbsp;<Tooltip title="What do you want others to call you?"><Icon
                        type="question-circle-o"/></Tooltip></span>)}
                >
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                    })(
                        <Input/>
                    )}
                </Form.Item>
                <Form.Item
                    label="Habitual Residence"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{type: 'array', required: true, message: 'Please select your habitual residence!'}],
                    })(
                        <Cascader options={residences}/>
                    )}
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                >
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(
                        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                    )}
                </Form.Item>
                <Form.Item label="Avatar">
                    {getFieldDecorator('avatar', {
                        rules: [{
                            required: true, message: 'Please choose an avatar!',
                        }]
                    })(
                        <FileInput text={'Choose File'}/>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="#">agreement</a></Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...fullWidthLayout} style={{textAlign: 'right'}}>
                    <Button type="secondary" style={{marginRight: '10px'}}
                            onClick={(e) => this.handleCancel(e)}>Cancel</Button>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({
    name: 'register',
    mapPropsToFields: (props) => mapModelAttributesToFormFields(props.user)
})(RegistrationForm);

export default WrappedRegistrationForm;