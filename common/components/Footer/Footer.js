import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

const Footer = () => (
    <footer className={s.root}>
      <a className={s.vkLink} href="https://vk.com/tri.devyatoe" target="_blank"></a>
      <a className={s.link} href="mailto:info@tridevyatoe.org">info@tridevyatoe.org</a>
    </footer>
)

export default withStyles(s)(Footer)
