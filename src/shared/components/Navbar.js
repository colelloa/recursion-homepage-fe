import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { showContact } from '../../features/contact/actions'

import { 
    HOME_URL, 
} from '../constants'


class Navbar extends Component {
    render() {
        return <>
          <Menu style={{ backgroundColor: 'grey', lineHeight: '64px'}} 
            theme="dark" 
            mode="horizontal" 
            openKeys={['adminMenu', 'mainMenu']}
            selectable={false}>
            <Menu.Item key={'se'}>
                <Link to={HOME_URL} >SERVICES
                </Link>
            </Menu.Item>
            <Menu.Item key={'ab'}>
                <Link to={HOME_URL} >ABOUT
                </Link>
            </Menu.Item>

            <Menu.Item key={'co'} onClick={() => this.props.showContact(true)}>
                CONTACT
            </Menu.Item>
          </Menu>
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
}) (withRouter(Navbar))