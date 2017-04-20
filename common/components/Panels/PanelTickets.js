import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelTickets = () => (
  <div>
    <h2>Билеты</h2>
    <p>
      Стоимость билета участника: <span className={s.price}>3 100 руб.</span>
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
        Оплатить в любом банке по номеру счёта с подписью своих ФИО
        и пометкой «Тридевятое».&nbsp;
        <a
          className={s.link}
          href="https://elba.kontur.ru/card/79852818902"
          target="_blank"
        >
          Информация о счете
        </a>
        &nbsp;(зарегистрирован на имя Игоря Юрко).
      </li>
    </ul>
    <p>
      Если вы оплатили по безналичному расчету,
       то вам необходимо скинуть подтверждение платежа на почту:&nbsp;
       <a className={s.link} href="mailto:info@tridevyatoe.org">
         info@tridevyatoe.org
       </a>.
    </p>
  </div>
)

export default withStyles(s)(PanelTickets)
