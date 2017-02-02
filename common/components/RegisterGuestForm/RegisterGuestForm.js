import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
import FormField from '../FormField/FormField'
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
    return (
      <form onSubmit={handleSubmit} noValidate >
        <Field name="name" type="text" component={FormField} label="ФИО"/>
        <Field name="number" component={FormField} label="Телефон"/>
        <Field name="email" type="email" component={FormField} label="Email"/>
        <label className={s.choiseLabel}>
          Количество билетов
          <Field className={s.select} name="tickets" component="select">
            {this.renderTicketOptions()}
          </Field>
        </label>
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
    'number',
    'tickets'
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
