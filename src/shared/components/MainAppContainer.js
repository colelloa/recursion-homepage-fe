import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Layout, Affix } from 'antd'
import { ContentArea, Navbar} from '../components'

const { Header, Content, Footer } = Layout

class MainAppContainer extends Component {
    render() {
        return <>
            <Layout className="layout">
              <Affix>
                <Header style={{backgroundColor: 'grey'}}>
                  <Navbar />
                </Header>
              </Affix>
              <Content >
                <div>
                    <ContentArea />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>©2020 Recursion Labs LLC</Footer>
            </Layout>          
        </>;
    }
}

export default withRouter(MainAppContainer)