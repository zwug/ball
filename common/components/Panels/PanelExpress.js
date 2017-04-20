import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelTickets = ({onLinkClick}) => (
  <div>
    <h2>Экспресс-подготовка к балу</h2>
    <p>
      Экспресс-подготовка - это курс занятий, за который вы освоите все танцы, необходимые для участия в балу.
    </p>
    <p>
      Всего за 4 занятия вы научитесь танцевать вальс, танго и другие не менее интересные танцы!
    </p>
    <p>
      Экспресс-подготовка - это отличная возможность для тех, кто ограничен в свободном времени! Ведь время и дни мы будем подбирать исходя из пожеланий большинства записавшихся.
    </p>
    <p>
      Смело пиши нам на почту: &nbsp;
      <a className={s.link} href="mailto:info@tridevyatoe.org">
        info@tridevyatoe.org
      </a> или звони по телефону: &nbsp;
      <a className={s.link} href='tel:+79296564512'>
        +7 (929) 656-45-12
      </a>.
    </p>
    <p>
      Чтобы попасть на экспресс-подготовку, необходимо приобрести билет участника. Как это сделать, вы узнаете
      <a className={s.link} onClick={onLinkClick}> здесь</a>.
    </p>
  </div>
)

export default withStyles(s)(PanelTickets)
