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
        <h1 className={s.heading}>Экспресс-подготовка к балу</h1>
        <div className={s.logo}></div>
        <div className={s.sellingText}>
          <p>Приглашаем вас на курс занятий, за который вы освоите все танцы, необходимые для участия в бале.</p>
          <p>Всего за 3 занятия вы научитесь танцевать вальс, танго и другие не менее интересные танцы!</p>
          <p>Экспресс-подготовка - это отличная возможность для тех, кто ограничен в свободном времени, но хочет попасть на бал! Время и дни будут подбираться исходя из пожелания большинства записавшихся.</p>
          <p>Чтобы воспользоваться этим предложением, Вам необходимо заполнить заявку и с вами свяжутся в
            &nbsp;<span className={s.underline}>ближайшее время!</span>
          </p>
          <strong>Стоимость экспресс-курса 3 100 руб.</strong>
          <p>P.S. Бал состоится 21 мая в Измайловском кремле. Это будет тематический бал, на котором Вы сможете почувствовать себя в роли любимого сказочного героя.</p>
          <strong>Успей приобрести билет!</strong>
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
