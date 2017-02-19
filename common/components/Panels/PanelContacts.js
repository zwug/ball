import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelPlace = () => (
  <div>
    <h2>Контакты</h2>
    <p>
      Телефон:&nbsp;
      <a className={s.link} href='tel:+79296564512'>
        +7 (929) 656-45-12
      </a>
    </p>
    <p>
      Почта:&nbsp;
      <a className={s.link} href="mailto:info@tridevyatoe.org">
        info@tridevyatoe.org
      </a>
    </p>
    <h3>Мы в социальных сетях</h3>
    <p>
      <a className={s.link} href="https://www.instagram.com/tri_devyatoe_bal/" target="_blank">
        Instagram
      </a>
    </p>
    <p>
      <a className={s.link} href="https://vk.com/tri.devyatoe" target="_blank">
        VK
      </a>
    </p>
    <p>
      <a className={s.link} href="https://t.me/tri_devyatoe" target="_blank">
        Telegram
      </a>
    </p>
  </div>
)

export default withStyles(s)(PanelPlace)
