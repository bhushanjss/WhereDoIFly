import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import AddFlightFormReducer from './AddFlightFormReducer';
import LoginFormReducer from './LoginFormReducer';

export default combineReducers({
  flights: flightsReducer,
  addFlightForm: AddFlightFormReducer,
  loginForm: LoginFormReducer
});
