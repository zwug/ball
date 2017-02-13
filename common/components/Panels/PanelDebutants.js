import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import s from './Panels.css';

const PanelDebutants = () => (
  <div>
    <h2>Дебютанты</h2>
    <p>
      Дебютанты – это люди, впервые попавшие на бал. Именно им выпадает честь
      торжественно пройти в первом полонезе и продемонстрировать всю свою стать
      и красоту.
    </p>
    <p>
      Дебютантами могут стать молодые люди и девушки в возрасте от 18 до 25
      лет, которые первый раз пришли на наш бал. Из всех претендентов будут
      отобраны 12 юношей и 12 дам. Претендовать на роль дебютантов можно как в
      паре, так и поодиночке. Как будет проходить отбор – участники узнают на
      репетициях.
    </p>
  </div>
)

export default withStyles(s)(PanelDebutants)
