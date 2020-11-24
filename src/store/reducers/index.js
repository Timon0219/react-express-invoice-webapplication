import { combineReducers } from 'redux'
import alert from './alert.reducer'
import user from './user.reducer'

export default combineReducers({
    alert,
    user,
})