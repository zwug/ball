import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Signup.css'
import SignupForm from '../../components/SignupForm/SignupForm'
import * as userActions from '../../actions/user'


class Signup extends Component {
  static propTypes = {
    children: PropTypes.element,
    user: PropTypes.object,
    userActions: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { signupSuccess, signupFail } = this.props.user

    return (
      <div className={s.container}>
        <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
        <div className={s.logo}></div>
        <div className={s.sellingText}>
          <p>"Добро пожаловать в Тридевятое!" Тематический весенний бал.</p>
          <p>Ты давно хотела оказаться в сказочном месте и чтобы тебя закружили в вальсе уверенные руки партнёра?</p>
          <p>А ты давно хотел попасть туда, где тебя будут окружать 60 прекрасных дам, с которыми ты сможешь познакомиться?</p>
          <p>Ты уже сейчас можешь вспоминать любимого героя из мультфильмов или сказок, в образе которого ты хочешь оказаться, ведь наш бал тематический!</p>
          <p>25 марта начало репетиций! Успей приобрести билет!</p>
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
