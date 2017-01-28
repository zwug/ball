import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
import FormField from '../FormField/FormField'
import s from './RegisterForm.css'

const validate = values => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'Поле обязательно'
  }
  if (!values.lastname) {
    errors.lastname = 'Поле обязательно'
  }
  if (!values.email) {
    errors.email = 'Поле обязательно'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный формат почты'
  }
  return errors
}

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} noValidate >
      <Field name="firstname" type="text" component={FormField} label="Имя"/>
      <Field name="lastname" type="text" component={FormField} label="Фамилия"/>
      <Field name="email" type="email" component={FormField} label="Email"/>
      <Field name="date" type="date" component={FormField} label="Дата рождения"/>
      <div>
        <button className={s.button} type="submit" disabled={submitting}>Зарегистрироваться!</button>
      </div>
    </form>
  )
}

RegisterForm.propTypes = {

}

export default reduxForm({
  form: 'RegisterForm',  // a unique identifier for this form
  validate                // <--- validation function given to redux-form
})(withStyles(s)(RegisterForm))
