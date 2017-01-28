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
    super(props);
    this.state = {
      date: null
    };
  }

  renderInput({ input, label, type }) {
    if (type === 'date') {
      return (
        <DatePicker
          locale="ru-ru"
          selected={this.state.date}
          onChange={this.onDateChange.bind(this)}
          className={s.input}
        />
      )
    }
    return (<input className={s.input} {...input} placeholder={label} type={type}/>)
  }

  onDateChange(date) {
    this.setState({
      date
    });
  }

  render() {
    const { children, input, label, type,
        meta: { touched, error, warning } } = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          {this.renderInput(this.props)}
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(FormField)
