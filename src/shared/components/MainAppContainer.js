import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Layout, Affix } from 'antd'
import { ContentArea, Navbar} from '../components'

const { Header, Content} = Layout

class MainAppContainer extends Component {
    state = {
      hideNav: true,
    }
    hideBar = () => {
      window.scrollY > (window.screen.height * 0.7 / 2)
      ? this.setState({ hideNav: false })
      : this.setState({ hideNav: true })
   }

   componentDidMount(){
       window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
   }

    render() {
        return <>
            <Layout className="layout">
              <div style={(window.scrollY > window.screen.height * 0.7 / 2) ? {display: 'none'} : {backgroundColor: 'black', height:64, width:'100%'}}
              ></div>
              <Affix>
                 <Header className={this.state.hideNav ? 'hide-nav' : ''} style={{backgroundColor: 'grey'}}>
                   <Navbar />
                 </Header>
              </Affix>
              <Content >
                <div>
                    <ContentArea />
                </div>
              </Content>
            </Layout>          
        </>;
    }
}

export default withRouter(MainAppContainer)