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
      'Не был',
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
    values['balls'] = this.balls.reduce((balls, ball, index) => {
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
        <Field name="phone" component={FormField} label="Телефон"/>
        <Field name="email" type="email" component={FormField} label="Email"/>
        <Field
          name="sex"
          type="boolean"
          inputLabels={['Леди', 'Джентльмен']}
          inputValues={['female', 'male']}
          component={FormField}
          label="Пол"
        />
        <Field name="vk" component={FormField} label="Ссылка на профиль вконтакте (для добавления в группу)"/>
        <Field
          component={FormField}
          inputLabels={['Новичек', 'Любитель', 'Профи']}
          label="Уровень танцевальной подготовки"
          name="level"
          type="oneOfMany"
        />
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
        <Field name="hasPartner" type="boolean" component={FormField} label="Есть ли у Вас пара на бал?"/>
        {this.props.hasPartner === 'true' &&
          <Field name="partner" component={FormField} label="ФИО партнера"/>}

        <Field name="debut" type="boolean" component={FormField} label="Хотите ли Вы быть дебютантом бала?"/>
        <div>
          <button className={s.button} type="submit" disabled={submitting}>Зарегистрироваться!</button>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const requiredFields = [
    'date',
    'debut',
    'email',
    'hasPartner',
    'level',
    'name',
    'phone',
    'sex',
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
    const level = selector(state, 'level')
    return {
      hasPartner,
      level
    }
  }
)(RegisterForm)

export default withStyles(s)(RegisterForm)
