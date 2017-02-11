import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelVisagist = () => (
  <div>
    <h2>Визажисты</h2>
    <p>
      Мы готовы предоставить вам профессиональных визажистов, гримеров и
      парикмахеров, для создания законченного образа на бал. Цена за работу
      обсуждается лично. Для записи и уточнения цены необходимо написать
      письмо на почту&nbsp;
      <a className={s.link} href="mailto:bal@tridevyatoe.org">
        bal@tridevyatoe.org
      </a>.
      В письме нужно указать ваше ФИО,
      какая услуга вам нужна и краткое описание того, что вы хотите,
      желательно, с фотографией.
    </p>
    <p>
      Заявки перестают приниматься за 10 дней до мероприятия. Количество мест
      ограничено. Так что советуем долго не тянуть.
    </p>
  </div>
)

export default withStyles(s)(PanelVisagist)
