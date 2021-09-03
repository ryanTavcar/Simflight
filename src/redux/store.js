import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from "next-redux-wrapper"
import {productList} from './reducers'

const initialState = {}

const reducer = combineReducers({
    productList
})

// the line below to be able to use Redux browser extention
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancer = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = () => createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)
export const wrapper = createWrapper(store)