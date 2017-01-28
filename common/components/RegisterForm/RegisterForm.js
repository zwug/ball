import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Field, reduxForm } from 'redux-form'
import FormField from '../FormField/FormField'
import s from './RegisterForm.css'

const validate = values => {
  const requiredFields = [
    'name',
    'date',
    'email',
    'number',
    'vk'
  ];
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

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  const skillLevels = ['Новичек', 'Любитель', 'Профи'];
  return (
    <form onSubmit={handleSubmit} noValidate >
      <Field name="name" type="text" component={FormField} label="ФИО"/>
      <Field name="date" type="date" component={FormField} label="Дата рождения"/>
      <Field name="number" type="number" component={FormField} label="Телефон"/>
      <Field name="email" type="email" component={FormField} label="Email"/>
      <Field name="vk" component={FormField} label="Ссылка на профиль вконтакте (для добавления в группу)"/>
      <div>Уровень танцевальной подготовки</div>
      {skillLevels.map((level, index) => (
        <label className={s.label} key={index}>
          <Field className={s.radio} name="level" component="input" type="radio" value={`${index}`}>
          </Field>
          {level}
        </label>
      ))}
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
