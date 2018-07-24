import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import AddFlightFormReducer from './AddFlightFormReducer';

export default combineReducers({
  flights: flightsReducer,
  addFlightForm: AddFlightFormReducer
});
