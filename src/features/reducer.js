
import placeReducer from './place/reducer'
import { combineReducers } from 'redux'

export default combineReducers ({
    place: placeReducer
})