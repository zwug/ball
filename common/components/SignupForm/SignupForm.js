import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
import FormField from '../FormField/FormField'
import s from '../RegisterForm/RegisterForm.css'

class SignupForm extends Component {
  static propTypes = {

  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Field name="name" type="text" component={FormField} label="ФИО"/>
        <Field name="phone" component={FormField} label="Телефон"/>
        <Field name="email" component={FormField} label="email"/>
        <div>
          <button className={s.signupButton} type="submit" disabled={submitting}>Отправить</button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const requiredFields = [
    'name',
    'phone',
    'email'
  ]
  const errors = {}

  requiredFields.forEach((fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Поле обязательно'
    }
  })

  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!errors.email && !emailRegExp.test(values.email)) {
    errors.email = 'Неправильный формат почты'
  }

  return errors
}

SignupForm = reduxForm({
  form: 'SignupForm',
  validate
})(SignupForm)

export default withStyles(s)(SignupForm)
