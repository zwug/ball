import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
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

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstname" type="text" component={renderField} label="Имя"/>
      <Field name="lastname" type="text" component={renderField} label="Фамилия"/>
      <Field name="email" type="email" component={renderField} label="Email"/>
      <div>
        <button type="submit" disabled={submitting}>Зарегистрироваться!</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Очистить</button>
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
