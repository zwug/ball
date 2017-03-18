import { registerUser as saveUser, registerGuest as saveGuest, sendSignup } from '../api/user';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const REGISTER_FINISH = 'REGISTER_FINISH'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

function registerPending() {
  return {
    type: REGISTER_PENDING
  }
}

function registerSuccess() {
  if (window.yaCounter42739064) {
    window.yaCounter42739064.reachGoal('register_member_success');
  }
  return {
    type: REGISTER_SUCCESS
  }
}

function registerFail() {
  if (window.yaCounter42739064) {
    window.yaCounter42739064.reachGoal('register_member_fail');
  }
  return {
    type: REGISTER_FAIL
  }
}

function registerFinish() {
  return {
    type: REGISTER_FINISH
  }
}

function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS
  }
}

function signupFail() {
  return {
    type: SIGNUP_FAIL
  }
}

export const register = (data) => (dispatch) => {
  if (window.yaCounter42739064) {
    window.yaCounter42739064.reachGoal('register_member_submit');
  }
  dispatch(registerPending())
  return saveUser(data)
  .then((response) => {
    dispatch(registerSuccess())
  })
  .catch((err) => {
    dispatch(registerFail())
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

export const signup = (data) => (dispatch) => {
  return sendSignup(data)
  .then((response) => {
    dispatch(signupSuccess())
  })
  .catch((err) => {
    dispatch(signupFail())
  })
}
