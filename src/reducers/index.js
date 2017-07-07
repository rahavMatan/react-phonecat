import { combineReducers } from 'redux';
import allReducer from './all-reducer';
import phoneReducer from './phone-reducer';
const rootReducer = combineReducers({
  all:allReducer,
  phone:phoneReducer
});

export default rootReducer;
