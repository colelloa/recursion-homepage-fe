import React, { Component } from 'react'

import {
  BrowserRouter,
} from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Helmet } from 'react-helmet' 

import {
  MainAppContainer,
} from './shared/components'
import './shared/styles/main.scss'
import reducer from './features/reducer'

import 'antd/dist/antd.css'

const history = createBrowserHistory()
const createMiddleware = applyMiddleware(thunk)(createStore)
const store = createMiddleware(reducer)

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Recursion Labs</title>
                <link rel="shortcut icon" id="favicon" href=''></link>
            </Helmet>
            <MainAppContainer />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;