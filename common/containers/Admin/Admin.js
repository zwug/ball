import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Admin.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as adminActions from '../../actions/admin'
import LoginForm from './LoginForm'

class Admin extends Component {
  renderMembers() {
    console.log('render guests', this.props.admin.orders);
    if (!this.props.admin.orders.members) {
      return null
    }
    return (
      <table>
        <thead>
          <th>email</th>
        </thead>
        <tbody>
          {this.props.admin.orders.members.map((member, key) => (
            <tr key={key}>
              <td>{member.email}</td>
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
      <div>
        <button onClick={this.props.adminActions.getOrders}>Обновить</button>
        <h1>Участники</h1>
        {this.renderMembers()}
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
