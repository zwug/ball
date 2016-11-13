import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../../client/routes'
import { Router } from 'react-router'

class Root extends Component {
// const Root = ({ store, history }) => (
  getChildContext() {
    return {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        const removeCss = styles.map(x => x._insertCss());
        return () => { removeCss.forEach(f => f()); };
      }
    };
  }

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  static childContextTypes = {
    insertCss: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history} routes={routes}/>
      </Provider>
    )
  }
}

export default Root
