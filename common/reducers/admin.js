import { LOGIN_SUCCESS, LOGIN_FAIL, ORDERS_FAIL, ORDERS_COMPLETE } from '../actions/admin'

const admin = {
  isAuthorized: false,
  orders: {}
}

const counter = (state = admin, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthorized: true
      })
    case LOGIN_FAIL:
      return Object.assign({}, state, admin)
    case ORDERS_COMPLETE:
      return Object.assign({}, state, {
        orders: action.orders
      })
    case ORDERS_FAIL:
      return Object.assign({}, state, {
        orders: {}
      })
    default:
      return state
  }
}

export default counter
