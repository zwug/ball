import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Signup.css'
import SignupForm from '../../components/SignupForm/SignupForm'
import * as userActions from '../../actions/user'
import { browserHistory } from 'react-router';


class Signup extends Component {
  static propTypes = {
    children: PropTypes.element,
    user: PropTypes.object,
    userActions: PropTypes.object
  }

  constructor(props) {
    super(props)
    const location = browserHistory.getCurrentLocation()
    this.sex = location.query['s'] || null // f - female, m - male
  }

  componentWillMount() {
    const location = Object.assign({}, browserHistory.getCurrentLocation());
    delete location.query['s'];
    browserHistory.push(location);
  }

  render() {
    const { signupSuccess, signupFail } = this.props.user

    return (
      <div className={s.container}>
        <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
        <div className={s.logo}></div>
        <div className={s.sellingText}>
          <p>Добро пожаловать в Тридевятое! Тематический весенний бал в Измайловском кремле..</p>
          {this.sex !== 'm' &&
            <p>Ты давно хотела оказаться в сказочном месте и чтобы тебя закружили в вальсе уверенные руки партнёра?</p>}
          {this.sex !== 'f' &&
            <p>Ты давно хотел попасть туда, где тебя будут окружать 60 прекрасных дам, с которыми ты сможешь познакомиться?</p>}
          <p>Мы решили воплотить твои желания в реальность! 21 мая в Измайловском кремле состоится самый запоминающийся бал весны.</p>
          <p>Ты уже сейчас можешь вспоминать любимого героя из мультфильмов или сказок, в образе которого ты хочешь оказаться, ведь наш бал тематический! 29 марта начало репетиций, на которых вас всему научат, чтобы уверенно чувствовать себя на паркете!</p>
          <p>Репетиции будут проходить по средам с 19:00 до 21:00 и субботам с 18:00 до 20:00 (Хорошевское шоссе, 21).</p>
          <p>Успей приобрести билет!</p>
        </div>
        <div className={s.contacts}>
          <Link className={s.link} to='/'>tridevyatoe.org</Link>
          <br/>
          <a className={s.link} href='tel:+79296564512'>
            +7 (929) 656-45-12
          </a>
          <br/>
          <a className={s.link} href="mailto:info@tridevyatoe.org">
            info@tridevyatoe.org
          </a>
        </div>
        {signupSuccess && <h1 className={s.heading}>Заявка отправлена!</h1>}
        {signupFail && <p className={s.errorTitle}>Ошибка обработки заявки</p>}
        {!signupSuccess &&
          <div className={s.formContainer}>
            <SignupForm onSubmit={this.props.userActions.signup} />
          </div>
        }
        <div className={s.lady}></div>
        <div className={s.gentleman}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Signup))
