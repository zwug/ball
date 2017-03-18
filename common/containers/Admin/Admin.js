import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Admin.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as adminActions from '../../actions/admin'
import LoginForm from './LoginForm'

class Admin extends Component {
  renderMembers() {
    if (!this.props.admin.orders.members) {
      return null
    }
    return (
      <table className={s.table}>
        <thead>
          <tr>
            <th>email</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>ВК</th>
            <th>Создан (UTC)</th>
            <th>уровень танцев</th>
            <th>Пол</th>
            <th>Дата рождения</th>
            <th>Дебютант</th>
            <th>Партнер</th>
            <th>Балы</th>
          </tr>
        </thead>
        <tbody>
          {this.props.admin.orders.members.map((member, key) => (
            <tr key={key}>
              <td>{member.email}</td>
              <td>{member.fio}</td>
              <td>{member.phone}</td>
              <td>{member.vk}</td>
              <td>{member.createdAt}</td>
              <td>{member.level}</td>
              <td>{member.sex}</td>
              <td>{member['birth_date']}</td>
              <td>{member.debut ? 'да' : 'нет'}</td>
              <td>{member.partner || 'нет'}</td>
              <td>{member.balls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  renderRequests() {
    if (!this.props.admin.orders.requests) {
      return null
    }

    return (
      <table className={s.table}>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Создан (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.admin.orders.requests.map((request, key) => (
            <tr key={key}>
              <td>{request.fio}</td>
              <td>{request.phone}</td>
              <td>{request.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  renderGuests() {
    if (!this.props.admin.orders.guests) {
      return null
    }
    return (
      <table className={s.table}>
        <thead>
          <tr>
            <th>email</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>количество билетов</th>
            <th>Создан (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.admin.orders.guests.map((guest, key) => (
            <tr key={key}>
              <td>{guest.email}</td>
              <td>{guest.fio}</td>
              <td>{guest.phone}</td>
              <td>{guest['tickets_count']}</td>
              <td>{guest.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  render() {
    if (!this.props.admin.isAuthorized) {
      return <LoginForm onSubmit={this.props.adminActions.login}/>
    }
    return (
      <div className={s.container}>
        <button onClick={this.props.adminActions.getOrders}>Обновить</button>
        <h1>Участники</h1>
        {this.renderMembers()}
        <hr/>
        <h1>Гости</h1>
        {this.renderGuests()}
        <hr/>
        <h1>Заявки</h1>
        {this.renderRequests()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  adminActions: bindActionCreators(adminActions, dispatch)
})

const mapStateToProps = state => ({
  admin: state.admin
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Admin))
