import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  log: logReducer // log is what we call our state just for the logReducer
});
