import { registerUser as saveUser, registerGuest as saveGuest } from '../api/user';

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
  saveUser(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
}

export const registerGuest = (data) => (dispatch) => {
  dispatch(registerPending())
  saveGuest(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
}
