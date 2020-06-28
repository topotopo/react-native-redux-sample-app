import { combineReducers, createStore } from 'redux'
import { AppState } from './type'
import { Store } from 'redux'
import { medicineList } from './medicine-list/reducer'


const combinedReducer = combineReducers({ medicineList }) //Add reducers here

export const store = createStore(combinedReducer)