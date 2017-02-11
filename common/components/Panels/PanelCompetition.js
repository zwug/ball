import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelCompetition = () => (
  <div>
    <h2>Конкурс на Короля и Королеву бала</h2>
    <p>
      В отличие от многих балов, одной из наших традиций является выбор Короля
      и Королевы. Ими может стать любой участник бала, которого выберут сами
      участники. Определение победителей происходит путём голосования на самом
      балу. Так что если вы хотите выиграть это почётное звание, то вам нужно
      быть активным, заметным, общительным и научиться хорошо танцевать. А в
      этом вам помогут наши преподаватели танцев ;-).
    </p>
  </div>
)

export default withStyles(s)(PanelCompetition)
