import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Panels.css'
import PanelRehersals from './PanelRehersals'
import PanelMembers from './PanelMembers'
import PanelGuests from './PanelGuests'
import PanelTickets from './PanelTickets'
import PanelDiscount from './PanelDiscount'
import PanelDebutants from './PanelDebutants'
import PanelCompetition from './PanelCompetition'
import PanelPlace from './PanelPlace'
import PanelVisagist from './PanelVisagist'
import PanelContacts from './PanelContacts'

const panelConfig = {
  rehersals: {
    label: 'Репетиции',
    component: PanelRehersals
  },
  members: {
    label: 'Участники',
    component: PanelMembers
  },
  guests: {
    label: 'Гости',
    component: PanelGuests
  },
  tickets: {
    label: 'Билеты',
    component: PanelTickets
  },
  discount: {
    label: 'Скидки',
    component: PanelDiscount
  },
  // don't need it currently
  // debutants: {
  //   label: 'Дебютанты',
  //   component: PanelDebutants
  // },
  competition: {
    label: 'Король и Королева',
    component: PanelCompetition
  },
  place: {
    label: 'Место и время',
    component: PanelPlace
  },
  visagist: {
    label: 'Визажисты',
    component: PanelVisagist
  },
  contacts: {
    label: 'Контакты',
    component: PanelContacts
  }
}

class Panels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePanel: panelConfig.rehersals
    }
  }

  onControlClick(panelName) {
    this.setState({
      activePanel: panelConfig[panelName]
    })
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.controlsContainer}>
          {Object.keys(panelConfig).map((panelName, index) =>
            <div
              className={panelConfig[panelName].label === this.state.activePanel.label
                  ? s.activeControlItem
                  : s.controlItem}
              key={index}
              onClick={this.onControlClick.bind(this, panelName)}
            >
              {panelConfig[panelName].label}
            </div>
          )}
        </div>
        <div className={s.panel}>
          {React.createElement(this.state.activePanel.component, {
            onLinkClick: this.onControlClick.bind(this, 'tickets')}
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Panels)
