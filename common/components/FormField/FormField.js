import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import DatePicker from 'react-datepicker'
import s from './FormField.css'

class FormField extends Component {
  static propTypes = {
    children: PropTypes.element,
    error: PropTypes.string,
    input: PropTypes.object,
    label: PropTypes.string,
    touched: PropTypes.bool,
    type: PropTypes.string,
    warning: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      date: null
    }
  }

  renderInput({ input, label, type }) {
    if (type === 'date') {
      return (
        <DatePicker
          {...input}
          locale="ru-ru"
          selected={this.state.date}
          onChange={this.onDateChange.bind(this)}
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          className={s.input}
        />
      )
    } else if (type === 'boolean') {
      return  (
        <div>
          <label className={s.choiseLabel}>
            <input {...input} className={s.checkInput} type="radio" value="false" />
            Нет
          </label>
          <label className={s.choiseLabel}>
            <input {...input} className={s.checkInput} type="radio" value="true" />
            Да
          </label>
        </div>
      )
    }
    return (<input className={s.input} {...input} type={type}/>)
  }

  onDateChange(date, evt) {
    this.setState({
      date
    })
    if (this.props.input && this.props.input.onChange) {
      this.props.input.onChange();
    }
  }

  render() {
    const { children, input, label, type,
        meta: { touched, error, warning } } = this.props;
    return (
      <div>
        <label className={s.label}>{label}&nbsp;</label>
        {touched && ((error && <span className={s.error}>{error}</span>) || (warning && <span>{warning}</span>))}
        <div>
          {this.renderInput(this.props)}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(FormField)
