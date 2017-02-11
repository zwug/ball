import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelTickets = () => (
  <div>
    <h2>Билеты</h2>
    <p>
      Стоимость билета участника: <span className={s.price}>3 000 руб.</span>
    </p>
    <p>
      Стоимость билета гостя: <span className={s.price}>750 руб.</span>
    </p>
    <p>
      Чтобы забронировать билет, вам необходимо заполнить соответствующую&nbsp;
      <a className={s.link} href="/#register">анкету</a>. После отправки анкеты
      – происходит бронь билета, который нужно выкупить в течение 5 дней.
      После бронь автоматически снимается. Количество билетов ограниченно
      (50 билетов для гостей, 60 билетов для девушек и 60 билетов для юношей).
    </p>
    <p>
      Выкупить билет можно двумя способами:
    </p>
    <ul>
      <li>
        Позвонить по телефону или написать на почту и договориться о встрече
        с организаторами;
      </li>
      <li>
        Оплатить в любом банке по номеру счёта: ХХХХХХХХ, с подписью своих ФИО
        и пометкой «Тридевятое».
      </li>
    </ul>
    <p>
      Если вы оплатили по безналичному расчету и в течение суток вам не
       пришёл билет – сообщите об этом на почту:&nbsp;
       <a className={s.link} href="mailto:info@tridevyatoe.org">
         info@tridevyatoe.org
       </a>.
    </p>
  </div>
)

export default withStyles(s)(PanelTickets)
