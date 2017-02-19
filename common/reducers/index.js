import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import counter from './counter'
import user from './user'
import admin from './admin'

const rootReducer = combineReducers({
  admin,
  counter,
  form: reduxFormReducer,
  routing,
  user
})

export default rootReducer
