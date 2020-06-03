import React, { Component } from 'react';
import { Menu, Anchor } from 'antd';
import { connect } from 'react-redux'
import { showContact } from '../../features/contact/actions'

const { Link } = Anchor;

class Navbar extends Component {
    render() {
        return <>
        <Anchor style={{backgroundColor: 'grey'}}>
          <Menu style={{ backgroundColor: 'grey', lineHeight: '64px'}} 
            theme="dark" 
            mode="horizontal" 
            openKeys={['adminMenu', 'mainMenu']}
            selectable={false}>
            <Menu.Item key={'se'}>
                <Link href="#services"  title='SERVICES'>
                </Link>
            </Menu.Item>
            <Menu.Item key={'ab'}>
                <Link href="#about"  title='ABOUT'>
                </Link>
            </Menu.Item>

            <Menu.Item key={'co'} onClick={() => this.props.showContact(true)}>
                CONTACT
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