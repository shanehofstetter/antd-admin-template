import React from "react";
import {Card, Col, Icon, Row, Statistic} from "antd";
import {BaseContent} from "../layouts/BaseContent";

const Dashboard = (props) => {
    return <BaseContent background={'transparent'} padding={0}>
        <Row gutter={16}>
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{color: '#3f8600'}}
                        prefix={<Icon type="arrow-up"/>}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{color: '#cf1322'}}
                        prefix={<Icon type="arrow-down"/>}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    </BaseContent>
};

export default Dashboard;