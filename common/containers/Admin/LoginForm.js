import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.emailInput = null
    this.passwordInput = null
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    var formData = {
      email: this.emailInput.value,
      password: this.passwordInput.value
    }
    this.props.onSubmit(formData)
  }

  render() {
    return (
      <form className={s.loginForm} onSubmit={this.onFormSubmit.bind(this)}>
        <input ref={(input) => { this.emailInput = input }} name="email" type="email" placeholder="email" required />
        <input ref={(input) => { this.passwordInput = input }} type="password" name="password" placeholder="password"  required />
        <input type="submit"/>
      </form>
    )
  }
}

export default withStyles(s)(LoginForm)
