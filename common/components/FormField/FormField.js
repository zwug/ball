import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import DatePicker from 'react-datepicker'
import s from './FormField.css'

class FormField extends Component {
  static propTypes = {
    children: PropTypes.element,
    error: PropTypes.string,
    input: PropTypes.object,
    label: PropTypes.node,
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

  renderInput({ input, label, type, inputLabels, inputValues }) {
    if (type === 'date') {
      return (
        <DatePicker
          {...input}
          locale='ru-ru'
          dateFormat='YYYY.MM.DD'
          selected={this.state.date}
          onChange={this.onDateChange.bind(this)}
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          className={s.input}
        />
      )
    } else if (type === 'boolean') {
      const labels = inputLabels || ['Нет', 'Да'];
      const values = inputValues || ['false', 'true'];
      return labels.map((label, index) =>
        <label className={s.choiseLabel} key={index}>
          <input {...input} className={s.checkInput} type="radio" value={values[index]} />
          {label}
        </label>
      )
    } else if (type === 'oneOfMany') {
      return inputLabels.map((label, index) =>
        <label className={s.choiseLabel} key={index}>
          <input {...input} className={s.checkInput} type="radio" value={`${index}`} />
          {label}
        </label>
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
    const { children, input, label, type, inputLabels, inputValues,
        meta: { touched, error, warning } } = this.props;
    if (type === "checkbox") {
      return (
        <label className={s.label}>
          <input className={s.input} {...input} type={type} />
          {label}&nbsp;
          {touched && ((error && <span className={s.error}>{error}</span>) || (warning && <span>{warning}</span>))}
        </label>
      )
    }
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
