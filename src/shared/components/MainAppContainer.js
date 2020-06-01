import React, { Component } from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { Layout, Affix } from 'antd'
import { ContentArea, Navbar } from '../components'


const { Header, Content, Footer } = Layout

class MainAppContainer extends Component {
    render() {
        return <>
            <Layout className="layout">
              <Affix><Header style={{backgroundColor: 'grey'}}>
                <Navbar />
              </Header></Affix>
              <Content style={{ padding: '0 50px' }}>
                <div style={{ padding: 24 }}>
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