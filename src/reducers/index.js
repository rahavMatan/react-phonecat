import { combineReducers } from 'redux';
import listReducer from './list-reducer';
import phoneReducer from './phone-reducer';
const rootReducer = combineReducers({
  filtered:listReducer,
  phone:phoneReducer
});

export default rootReducer;
