import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Panels.css';

const PanelGuests = ({onLinkClick}) => (
  <div>
    <h2>Гости</h2>
    <p>
      Если у вас нет времени ходить на репетиции, но вы хотите очутиться в
      сказке и попасть на наш бал, то у вас есть такая возможность!
    </p>
    <p>
      Вы можете прийти на бал в роли гостя. Для этого вам необходимо приобрести
      пригласительный билет, в стоимость которого включены фуршет, место за
      столиком, просмотр программы бала, лотерея, печать 1 фотографии с бала,
      мастер класс и другие сюрпризы.
    </p>
    <p>
      Чтобы приобрести билет, вам необходимо&nbsp;
      <a className={s.link} href="/#register">заполнить анкету</a>, ознакомиться
       с правилами пребывания на балу и выкупить пригласительный билет в течение
      5 дней, после оставлении заявки. Как это сделать описано&nbsp;
      <a className={s.link} onClick={onLinkClick}>здесь</a>.
    </p>
  </div>
)

PanelGuests.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default withStyles(s)(PanelGuests)
