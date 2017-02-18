import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
import FormField from '../FormField/FormField'
const agreement = require('../../../static/docs/user_agreement.pdf')
import s from '../RegisterForm/RegisterForm.css'

class RegisterFormGuest extends Component {
  static propTypes = {

  }

  renderTicketOptions() {
    const maxTickets = 10
    var ticketOptions = []

    for (let i = 0; i <= 10; i++) {
      ticketOptions.push(<option key={i} value={i}>{i}</option>)
    }
    return ticketOptions
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    const offerLabel = (
      <span>
        Я принимаю&nbsp;
        <a className={s.link} href={agreement} target="_blank">
          пользовательское соглашение
        </a>.
      </span>
    );
    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Field name="name" type="text" component={FormField} label="ФИО"/>
        <Field name="phone" component={FormField} label="Телефон"/>
        <Field name="email" type="email" component={FormField} label="Email"/>
        <div>
          <label className={s.choiseLabel}>
            Количество билетов
            <Field className={s.select} name="ticketsCount" component="select">
              {this.renderTicketOptions()}
            </Field>
          </label>
        </div>
        <Field name="offerAccept" type="checkbox" component={FormField} label={offerLabel}/>
        <div>
          <button className={s.button} type="submit" disabled={submitting}>Зарегистрироваться!</button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const requiredFields = [
    'name',
    'email',
    'offerAccept',
    'phone',
    'ticketsCount'
  ]
  const errors = {}

  requiredFields.forEach((fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Поле обязательно'
    }
  })

  var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!errors.email && !emailRegExp.test(values.email)) {
    errors.email = 'Неправильный формат почты'
  }
  return errors
}

RegisterFormGuest = reduxForm({
  form: 'RegisterFormGuest',
  validate
})(RegisterFormGuest)

export default withStyles(s)(RegisterFormGuest)
