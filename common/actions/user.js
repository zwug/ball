import { registerUser as saveUser, registerGuest as saveGuest } from '../api/user';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const REGISTER_FINISH = 'REGISTER_FINISH'

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

function registerFail() {
  return {
    type: REGISTER_FAIL
  }
}

function registerFinish() {
  return {
    type: REGISTER_FINISH
  }
}

export const register = (data) => (dispatch) => {
  dispatch(registerPending())
  return saveUser(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
}

export const resetRegister = (data) => (dispatch) => {
  dispatch(registerFinish())
}

export const registerGuest = (data) => (dispatch) => {
  dispatch(registerPending())
  return saveGuest(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
  .catch((err) => {
    dispatch(registerFail())
  })
}
