import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import FormField from '../FormField/FormField'
import s from './RegisterForm.css'

class RegisterForm extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)

    this.skillLevels = ['Новичек', 'Любитель', 'Профи']
    this.balls = [
      'Весенний бал МГТУ МИРЭА',
      'Чёрно-белая сказка',
      'Путешествие в Трансильванию',
      'Венский бал МИРЭА'
    ]
    this.booleanChoises = [
      'да',
      'нет'
    ]
  }

  handleSubmit = (values) => {
    values['ball'] = this.balls.reduce((balls, ball, index) => {
      if (values[`ball-${index}`]) {
        balls.push(ball)
      }
      return balls
    }, [])
    this.props.onSubmit(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)} noValidate >
        <Field name="name" type="text" component={FormField} label="ФИО"/>
        <Field name="date" type="date" component={FormField} label="Дата рождения"/>
        <Field name="number" type="number" component={FormField} label="Телефон"/>
        <Field name="email" type="email" component={FormField} label="Email"/>
        <Field name="vk" component={FormField} label="Ссылка на профиль вконтакте (для добавления в группу)"/>
        <div className={s.inputHeading}>Уровень танцевальной подготовки</div>
        {this.skillLevels.map((level, index) => (
          <label className={s.label} key={index}>
            <Field className={s.checkInput} name="level" component="input" type="radio" value={`${index}`}>
            </Field>
            {level}
          </label>
        ))}
        <div className={s.inputHeading}>Если Вы были на балах МИРЭА, отметьте на каких</div>
        {this.balls.map((ball, index) => (
          <label className={s.label} key={index}>
            <Field
              className={s.checkInput}
              name={`ball-${index}`}
              component="input"
              type="checkbox"
            />
            {ball}
          </label>
        ))}
        <div className={s.inputHeading}>Есть ли у Вас пара на бал?</div>
        {this.booleanChoises.map((choice, index) => (
          <label className={s.choiseLabel} key={index}>
            <Field className={s.checkInput} name="hasPartner" component="input" type="radio" value={`${index === 0}`}>
            </Field>
            {choice}
          </label>
        ))}
        {this.props.hasPartner === 'true' &&
          <Field name="partner" type="partner" component={FormField} label="ФИО партнера"/>}
        <div className={s.inputHeading}>Хотите ли Вы быть дебютантом бала?</div>
        {this.booleanChoises.map((choice, index) => (
          <label className={s.choiseLabel} key={index}>
            <Field className={s.checkInput} name="debut" component="input" type="radio" value={`${index === 0}`}>
            </Field>
            {choice}
          </label>
        ))}
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
    'date',
    'email',
    'number',
    'vk'
  ]
  const errors = {}

  requiredFields.forEach((fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Поле обязательно'
    }
  })

  if (values.hasPartner === 'true' && !values.partner) {
    errors.partner = 'Поле обязательно'
  }

  var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!errors.email && !emailRegExp.test(values.email)) {
    errors.email = 'Неправильный формат почты'
  }
  return errors
}

RegisterForm = reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm)

const selector = formValueSelector('RegisterForm')
RegisterForm = connect(
  state => {
    const hasPartner = selector(state, 'hasPartner')
    return {
      hasPartner
    }
  }
)(RegisterForm)

export default withStyles(s)(RegisterForm)
