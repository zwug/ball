import { REGISTER_SUCCESS, REGISTER_PENDING } from '../actions/user'

const user = {
  registerSuccess: false,
  registerPending: false
}

const counter = (state = user, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return Object.assign({}, state, {
        registerPending: true
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        registerSuccess: true,
        registerPending: false
      })
    default:
      return state
  }
}

export default counter
