import { combineReducers } from 'redux';
import { reducer } from './cart';
import { sortingIngredients } from './sortIngredients';
import {authReducer} from './auth';

export const rootReducer = combineReducers({
  reducer: reducer,
  sortingIngredients: sortingIngredients,
  authReducer: authReducer
});