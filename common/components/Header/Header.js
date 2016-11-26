import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

const Header = ({}) => {
  return (
    <header className={s.root}>
      <div className={s.items}>
        <Link className={s.link} to='/'>Главная</Link>
        <Link className={s.link} to='/about'>О нас</Link>
      </div>
    </header>
  )
}

export default withStyles(s)(Header)
