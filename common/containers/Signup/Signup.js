import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Signup.css'
import Header from '../../components/Header/Header'
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
      <div>
        <Header/>
        <div className={s.headingContainer}>
          <h1 className={s.heading}>Добро пожаловать в Тридевятое!</h1>
          <div className={s.logo}></div>
          <div className={s.sellingText}>
            Бал в Измайловском кремле. Самые главные люди на балу – это участники. Это те люди, которые больше всех погружаются в атмосферу сказки, проводят несколько часов в неделю, обучаясь новым танцам, знакомясь с новыми людьми, подготавливая образы к незабываемому вечеру. Один раз придя на бал, вам захочется очутиться там снова и снова. На балу участников ждёт выбор Короля с Королевой бала, лотерея, памятные сувениры и фотографии, праздничный фуршет и многое другое.
          </div>
          <div className={s.contacts}>
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
        </div>
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
