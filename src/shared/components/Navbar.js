import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import { 
    HOME_URL, 
} from '../constants'

class Navbar extends Component {
    render() {
        return <>
                <Menu >
                    <Menu.Item key={HOME_URL}>
                        <Link to={HOME_URL} > 
                        <div className='logo'> <img style={{height:'auto', width: 15, marginRight:3, marginBottom:4}} src='' alt='' 
                        /> Recursion Labs </div> 
                        </Link>
                    </Menu.Item>
                </Menu>
        </>
    }
}

export default withRouter(Navbar);