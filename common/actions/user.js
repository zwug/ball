import { registerUser } from '../api/counter';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_PENDING = 'REGISTER_PENDING'

function registerPending() {
  return {
    type: REGISTER_PENDING
  }
}

function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  }
}

export const register = (data) => (dispatch) => {
  dispatch(registerPending())
  registerUser(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
}

export const registerGuest = (data) => (dispatch) => {
  dispatch(registerPending())
  registerGuest(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
}
