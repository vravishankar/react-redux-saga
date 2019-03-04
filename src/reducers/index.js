// @flow

import { combineReducers } from 'redux'
import posts from './posts'

const entityReducers = combineReducers({
    posts
})

const rootReducer = combineReducers({
    entities: entityReducers
})

export default rootReducer