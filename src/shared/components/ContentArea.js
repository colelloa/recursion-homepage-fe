import React, { Component } from 'react'
import {
    Home,
} from '../../screens'
import {
    Switch,
    Route,
} from 'react-router-dom'
import { withRouter } from "react-router";
import { 
    HOME_URL,
} from '../constants'


class ContentArea extends Component {
    render() {
        return (
            <div className={'contentarea'}>
                    <Switch>
                        <Route component={Home} path={HOME_URL} />
                    </Switch>
            </div>
        );
    }
}

export default withRouter(ContentArea)