import { combineReducers } from 'redux';
import { ingredientReducer } from './ingredient';
import { PREVIOUS_STEP, NEXT_STEP } from '../actions';

//const 


export const rootReducer = combineReducers({
  ingredient: ingredientReducer,
});
