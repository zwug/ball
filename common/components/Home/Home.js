import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../Header/Header'

function Layout({ errorMessage, children }) {
  return (
    <div>
      <Header/>
      <h1>HOME</h1>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element
};

export default withStyles(s)(Layout)
