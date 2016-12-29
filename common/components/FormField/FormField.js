import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './FormField.css'

const FormField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className={s.input} {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

FormField.propTypes = {
  error: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  touched: PropTypes.bool,
  type: PropTypes.string,
  warning: PropTypes.string
};

export default withStyles(s)(FormField)
