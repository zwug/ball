import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Panels.css'

class Panels extends Component {
  static propTypes = {

  }

  render() {
    const controlNames = [
      'Участники',
      'Гости'
    ];
    return (
      <div className={s.root}>
        <div className={s.controlsContainer}>
          {controlNames.map((control, index) =>
            <div className={s.controlItem} key={index}>
              {control}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Panels)
