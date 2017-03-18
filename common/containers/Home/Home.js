import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import RegisterGuestForm from '../../components/RegisterGuestForm/RegisterGuestForm'
import Panels from '../../components/Panels/Panels'
import * as userActions from '../../actions/user'

const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

class Home extends Component {
  static propTypes = {
    children: PropTypes.element,
    user: PropTypes.object,
    userActions: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      activeForm: null
    }
  }

  onMemeberClick() {
    this.setState({
      activeForm: 'member'
    })
  }

  onGuestClick() {
    this.setState({
      activeForm: 'guest'
    })
  }

  onRegsterSelectClick() {
    this.props.userActions.resetRegister()
    this.setState({
      activeForm: null
    })
  }

  renderFormSelect() {
    if (this.state.activeForm === null) {
      return (
        <div className={s.formSelect} id='register'>
          <button className={s.button} onClick={this.onMemeberClick.bind(this)}>
            Хочу стать участником!
          </button>
          <button className={s.button} onClick={this.onGuestClick.bind(this)}>
            Хочу стать гостем!
          </button>
        </div>
      )
    }
    return null
  }

  renderForm() {
    if (this.props.user.registerSuccess) {
      return (
        <div>
          <p>Cпасибо, ваша бронь билета успешно прошла.
            <br/>
            Вам необходимо выкупить билет в течении 5 дней.
            Если у вас остались вопросы, пишите нам на почту:&nbsp;
            <a className={s.emailLink} href="mailto:info@tridevyatoe.org">info@tridevyatoe.org</a>
          </p>
          <br/>
          <button className={s.button} onClick={this.onRegsterSelectClick.bind(this)}>
            Вернуться к выбору регистрации
          </button>
        </div>
      )
    } else if (this.state.activeForm === 'member') {
      return <RegisterForm onSubmit={this.props.userActions.register} />
    } else if (this.state.activeForm === 'guest') {
      return <RegisterGuestForm onSubmit={this.props.userActions.registerGuest} />
    }
    return null
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
            <div className={s.logo}></div>
            <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
          </div>
        </div>
        <div className={s.container}>
          <div>
            <h1 className={s.infoHeading}>Начало репетиций уже 25 марта!</h1>
          </div>
          <div className={s.kremlinContainer}>
            <h1 className={s.kremlinHeading}>Бал в Измайловском кремле</h1>
          </div>
          <Panels />
          {this.renderFormSelect()}
          {this.renderForm()}
          {user.registerFail &&
            <div className={s.errorDesc}>
              К сожалению, отправка заявки завершилась неудачей, проверьте вводимые данные или свяжитесь с нами по почте&nbsp;
              <a className={s.emailLink} href="mailto:info@tridevyatoe.org">info@tridevyatoe.org</a>
            </div>
          }
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
