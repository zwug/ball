import { registerUser } from '../api/counter';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const register = (data) => (dispatch) => {
  console.log(data)
  registerUser(data)
  .then((response) => {
    console.log(response)
    dispatch(() => {
      type: REGISTER_SUCCESS
    })
  })
}
