import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
const oferta = require('../../../static/docs/oferta.pdf')

const Footer = () => (
    <footer className={s.root}>
      <div className={s.linkContainer}>
        <a className={s.vkLink} href="https://vk.com/tri.devyatoe" target="_blank"></a>
        <a href="https://vk.com/districtkopernik" target="_blank">
          <div className={s.kopernik}></div>
        </a>
        <a className={s.link} href="mailto:info@tridevyatoe.org">info@tridevyatoe.org</a>
        <a className={s.link} href={oferta} target="_blank">Публичная Оферта</a>
      </div>
    </footer>
)

export default withStyles(s)(Footer)
