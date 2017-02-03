import { getHundred as get100 } from '../api/user';

export const SET_COUNTER = 'SET_COUNTER'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const GET_100 = 'GET_100'

export const set = (value) => ({
  type: SET_COUNTER,
  payload: value
})

export const increment = () => ({
  type: INCREMENT_COUNTER
})

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const getHundred = () => (dispatch) => {
  // async
  get100()
  .then(data => data.json())
  .then((json) => {
    dispatch(set(100))
    console.log(json);
  })
}

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState()

  if (counter % 2 === 0) {
    return
  }

  dispatch(increment())
}

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, delay)
}
