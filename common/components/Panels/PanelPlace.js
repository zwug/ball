import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelPlace = () => (
  <div>
    <h2>Место и время бала</h2>
    <p>
      Дата бала: 21 мая 2017 года (воскресенье).
    </p>
    <p>
      Место бала: Измайловский дворец, зал Галерея
      (м. Партизанская, Измайловское шоссе, д.73 Ж).
    </p>
    <p>
      Время бала: 19:20-22:20, время сбора участников с 18:00,
      время сбора гостей с 18:50.
    </p>
  </div>
)

export default withStyles(s)(PanelPlace)
