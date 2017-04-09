import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Link } from 'react-router'
import s from './Panels.css'
const agreement = require('../../../static/docs/user_agreement.pdf')

const PanelMembers = ({onLinkClick}) => (
  <div>
    <h2>Участники</h2>
    <p>
      Самые главные люди на балу – это участники. Это те люди, которые больше
      всех погружаются в атмосферу сказки, проводят несколько часов в неделю,
      обучаясь новым танцам, знакомясь с новыми людьми, подготавливая образы к
      незабываемому вечеру. Один раз придя на бал, вам захочется очутиться там
      снова и снова. На балу участников ждёт выбор Короля с Королевой бала,
      лотерея, памятные сувениры и фотографии, праздничный фуршет и многое
      другое.
    </p>
    <p>
      Чтобы стать участником, вам необходимо ознакомиться с правилами
      участников, заполнить&nbsp;
      <a className={s.link} href="/#register">заявку на участие</a>
      , в течение
      пяти дней выкупить билет, и приходить на репетиции =).
    </p>
    <p>Правила участников:</p>
    <ol>
      <li>посещение репетиций</li>
      <li>соответствовать дресс-коду на балу: необходимо быть в образе сказочного героя из мультфильмов или детских сказок (аниме не разрешается)</li>
      <li>выбор образа необходимо согласовать с организаторами
        или прислать образ и описание на почту&nbsp;
        <a className={s.link} href="mailto:bal@tridevyatoe.org">
          bal@tridevyatoe.org
        </a>.
      </li>
      <li>на репетициях иметь сменную обувь</li>
      <li>
        ознакомиться с&nbsp;
        <a className={s.link} href={agreement} target="_blank">пользовательским соглашением</a>
      </li>
    </ol>
    <p>
      О стоимости билета и о скидках вы можете узнать&nbsp;
      <a className={s.link} onClick={onLinkClick}>здесь</a>.
    </p>
  </div>
)

PanelMembers.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default withStyles(s)(PanelMembers)
