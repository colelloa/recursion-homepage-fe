import React, { Component } from 'react';
import { Menu, Anchor, BackTop } from 'antd';
import { connect } from 'react-redux'
import { showContact } from '../../features/contact/actions'
import logo from '../../assets/logo.png'

import {
    CoffeeOutlined,
    CodeOutlined,
    PhoneOutlined
  } from '@ant-design/icons'
  

const { Link } = Anchor;

class Navbar extends Component {
    render() {
        return <>
        <Anchor className='custom-wrapper-navbar'>
          <Menu className='custom-menu-navbar' style={{ lineHeight: '64px'}}  
            theme="dark" 
            mode="horizontal" 
            selectable={false}>
            <Menu.Item key={'ho'}>
                <div className='logo'><img style={{height:'auto', width: 15, marginRight:3, marginBottom:4}} src={logo} alt='' /> Recursion Labs</div>
            </Menu.Item>

            <Menu.Item key={'co'} onClick={() => this.props.showContact(true)}>
                <div className='contact'><PhoneOutlined /> CONTACT</div>
            </Menu.Item>
            <Menu.Item key={'se'}>
                <Link href="#services"  title={<><CodeOutlined /> SERVICES</>}>
                </Link>
            </Menu.Item>
            <Menu.Item key={'ab'}>
                <Link href="#about"  title={<><CoffeeOutlined /> ABOUT</>}>
                </Link>
            </Menu.Item>
          </Menu>
          </Anchor>
        </>
    }
}

const mapStateToProps = ({ contact }) => {
    return { 
        contact
    }
}

export default connect (mapStateToProps, {
    showContact 
}) (Navbar)