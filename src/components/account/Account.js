import {Avatar, Card, Col, Divider, Row, Skeleton, Spin} from "antd";
import React from 'react';
import {Link} from "react-router-dom";
import {BaseContent} from "../../layouts/BaseContent";
import './Account.scss';

const currentUser = {
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    name: 'Jack Black',
    signature: 'CEO',
    title: 'PhD',
    group: 'Management',
    address: 'New York'
};

const projects = [
    {
        id: 0,
        href: '/projects/0',
        logo: 'http://www.carlogos.org/logo/Tesla-logo-2003-2500x2500.png',
        member: 'Tesla'
    },
    {
        id: 1,
        href: '/projects/1',
        logo: 'https://images-na.ssl-images-amazon.com/images/I/61qqGktRPkL._SY355_.jpg',
        member: 'VW'
    }
];

const Account = (props) => {
    return (
        <BaseContent background={'transparent'}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{marginBottom: 24}} loading={false}>
                        <div>
                            <div className={'avatarHolder'}>
                                <img alt="" src={currentUser.avatar}/>
                                <div className={'name'}>{currentUser.name}</div>
                                <div>{currentUser.signature}</div>
                            </div>
                            <div className={'detail'}>
                                <p>
                                    <i className={'title'}/>
                                    {currentUser.title}
                                </p>
                                <p>
                                    <i className={'group'}/>
                                    {currentUser.group}
                                </p>
                                <p>
                                    <i className={'address'}/>
                                    {currentUser.address}
                                </p>
                            </div>
                            <Divider style={{marginTop: 16}} dashed/>
                            <div className={'team'}>
                                <div className={'teamTitle'}>Projects</div>
                                <Spin spinning={false}>
                                    <Row gutter={36}>
                                        {projects.map(item => (
                                            <Col key={item.id} lg={24} xl={12}>
                                                <Link to={item.href}>
                                                    <Avatar size="small" src={item.logo}/>
                                                    {item.member}
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </Spin>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card
                        className={'tabsCard'}
                        bordered={false}
                    >
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        {props.children}
                    </Card>
                </Col>
            </Row>
        </BaseContent>
    );
};

export default Account;