import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

const Header = ({}) => {
  return (
    <header className={s.header}>
      <Link to='/'>Home</Link>
      <Link to='/join'>Join</Link>
    </header>
  )
}

Header.propTypes = {

}

export default withStyles(s)(Header)
