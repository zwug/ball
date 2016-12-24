import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Member.css';

const Member = ({description, img, name, reverse}) => {
  return (
    <div className={s.root} style={{flexDirection: reverse ? 'row-reverse' : 'row'}}>
      <img className={s.image} src={img}  />
      <div className={s.description}>
        <h2>{name}</h2>
        <p className={s.text}>{description}</p>
        <div className={s.swirl}></div>
      </div>
    </div>
  )
}

Member.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};

export default withStyles(s)(Member)
