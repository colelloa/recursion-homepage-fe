import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

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
            <Menu.Item key={HOME_URL}>
                <Link to={HOME_URL} >Home
                </Link>
            </Menu.Item>
          </Menu>
        </>
    }
}

export default withRouter(Navbar);