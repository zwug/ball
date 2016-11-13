import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../../components/Header/Header'

function Home({ errorMessage, children }) {
  return (
    <div>
      <Header/>
      <div className={s.container}>
        <h1>Добро пожаловать в Тридевятое!</h1>
      </div>
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.element
};

export default withStyles(s)(Home)
