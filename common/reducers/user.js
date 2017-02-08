import { REGISTER_FAIL, REGISTER_SUCCESS, REGISTER_PENDING, REGISTER_FINISH } from '../actions/user'

const user = {
  registerSuccess: false,
  registerFail: false,
  registerPending: false
}

const counter = (state = user, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return Object.assign({}, state, {
        registerFail: false,
        registerSuccess: false,
        registerPending: true
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        registerFail: false,
        registerSuccess: true,
        registerPending: false
      })
    case REGISTER_FAIL:
      return Object.assign({}, state, {
        registerFail: true,
        registerPending: false,
        registerSuccess: false
      })
    case REGISTER_FINISH:
      return Object.assign({}, state, {
        registerFail: false,
        registerSuccess: false,
        registerPending: false
      })
    default:
      return state
  }
}

export default counter
