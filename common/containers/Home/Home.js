import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../../components/Header/Header'

function Home({ errorMessage, children }) {
  return (
    <div>
      <div className={s.videoContainer}>
        <Header opaque />
        <video className={s.video}
          src="static/video/promo.mp4"
          autoPlay
          loop
          muted>
        </video>
        <div className={s.headingContainer}>
          <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.logo}></div>
        <p>Мы - творческое объединение людей, знающих своё дело.
           Организовываем сказочные балы любого формата.</p>
      </div>
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.element
};

export default withStyles(s)(Home)
