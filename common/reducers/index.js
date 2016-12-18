import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
  form: reduxFormReducer,
  routing
})

export default rootReducer
