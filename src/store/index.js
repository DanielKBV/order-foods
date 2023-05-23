import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { mealsReducer } from './meals/meals'
import { basketReducer } from './basket/basket'

const rootStore = combineReducers({
  basket: basketReducer,
  meals: mealsReducer,
})

export const store = createStore(rootStore, applyMiddleware(thunk))
