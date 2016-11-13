import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './About.css'
import Header from '../../components/Header/Header'
import members from './members'
import Member from '../../components/Member/Member'

const About = ({}) => {
  return (
    <div>
      <Header/>
      <div className={s.container}>
        <h1>О нас</h1>
        {members.map((member, key) => {
          const reverse = key % 2 === 1;
          return <Member key={key} reverse={reverse} {...member}/>
        })}
      </div>
    </div>
  );
}

export default withStyles(s)(About)
