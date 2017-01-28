import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Layout.css'

const Layout = ({ errorMessage, children }) => children

Layout.propTypes = {
  children: PropTypes.element
};

export default withStyles(s)(Layout)
