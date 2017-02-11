import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

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
