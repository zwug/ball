import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../../components/Header/Header'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import * as userActions from '../../actions/user'

let isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const Home = ({ errorMessage, children, userActions}) => (
  <div>
    <div className={s.videoContainer}>
      <Header opaque />
      {!isMobile() &&
        <video className={s.video}
          src="static/video/promo.mp4"
          autoPlay
          loop
          muted>
        </video>
      }
      <div className={s.headingContainer}>
        <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
      </div>
    </div>
    <div className={s.container}>
      <div className={s.logo}></div>
      <p>Мы - творческое объединение людей, знающих своё дело.
         Организовываем сказочные балы любого формата.</p>
      <RegisterForm onSubmit={userActions.register}/>
    </div>
  </div>
)

Home.propTypes = {
  children: PropTypes.element
  //@TODO add
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(withStyles(s)(Home))
