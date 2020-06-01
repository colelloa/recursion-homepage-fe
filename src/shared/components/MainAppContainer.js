import React, { Component } from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { ContentArea, Navbar } from '../components'

const { Header, Content, Footer } = Layout

class MainAppContainer extends Component {
    render() {
        return <>
            <Layout className="layout">
              <Header style={{}}>
                <Navbar />
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <ContentArea />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>©2020 Recursion Labs LLC</Footer>
            </Layout>          
        </>;
    }
}

const mapStateToProps = ({  }) => {
}

export default connect (mapStateToProps, {
}) (withRouter(MainAppContainer))