import { combineReducers } from 'redux';
import { reducer } from './cart'
import { sortingIngredients } from './sortIngredients'

export const rootReducer = combineReducers({
  reducer: reducer,
  sortingIngredients: sortingIngredients
});