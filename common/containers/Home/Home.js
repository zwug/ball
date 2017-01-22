import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import * as userActions from '../../actions/user'

const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

class Home extends Component {
  static propTypes = {
    children: PropTypes.element,
    user: PropTypes.object,
    userActions: PropTypes.object
  }

  renderForm() {
    if (this.props.user.registerSuccess) {
      return (
        <h2>Вы успешно зарегистрировались!</h2>
      )
    }
    return <RegisterForm onSubmit={this.props.userActions.register} />
  }

  render() {
    const { children, userActions, user } = this.props

    return (
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
          {this.renderForm()}
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Home))
