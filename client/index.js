import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import { browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../common/store/configureStore'
import Root from '../common/containers/Root'
import './metrika'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('app')

render(
  <Root store={store} history={history}/>, rootElement
)
