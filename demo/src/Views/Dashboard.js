import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
import CommonSearch from '../Components/Search/CommonSearch';
import "./dashboard.style.css"
import CommonList from '../Components/List/CommonList';

const { Header, Content } = Layout;

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Header>
                        <Row>
                            <Col span={24}>col</Col>
                        </Row>
                    </Header>
                    <Content>
                        <div className ="margin-2">
                        <Row>
                            <Col span={12} offset={6}>
                               <CommonSearch/>
                              </Col>
                        </Row>
                        </div>
                        <div className ="margin-2">
                        <Row>
                            <Col span={20} offset={2}>
                               <CommonList/>
                              </Col>
                        </Row>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    }
}
