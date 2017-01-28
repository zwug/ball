import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Panels.css'

class Panels extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.controlItem}></div>
      </div>
    )
  }
}

export default withStyles(s)(Panels)
