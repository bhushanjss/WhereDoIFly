import { TITLE_CHANGE, ORIGIN_AIRPORT_CITY_CHANGE,
  DESTINATION_AIRPORT_CITY_CHANGE, ORIGIN_DATE_TIME_CHANGE, ORIGIN_TIME_CHANGE,
  DESTINATION_DATE_TIME_CHANGE, DESTINATION_TIME_CHANGE, AIRLINE_CHANGE, NOTES_CHANGE,
  ADD_FLIGHT, ADD_FLIGHT_SUCCESS, ADD_FLIGHT_FAILED } from '../actions/types';

const INITIAL_STATE =
{ title: '',
originAirportCity: '',
destinationAirportCity: '',
originDateTime: new Date(),
originTime: '12:00 AM',
destinationDateTime: new Date(),
destinationTime: '12:00 AM',
airline: '',
notes: '',
loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_CHANGE:
      return { ...state, title: action.payload };
    case ORIGIN_AIRPORT_CITY_CHANGE:
      return { ...state, originAirportCity: action.payload };
    case DESTINATION_AIRPORT_CITY_CHANGE:
      return { ...state, destinationAirportCity: action.payload };
    case ORIGIN_DATE_TIME_CHANGE:
        return { ...state, originDateTime: action.payload };
    case ORIGIN_TIME_CHANGE:
        return { ...state, originTime: action.payload };
    case DESTINATION_DATE_TIME_CHANGE:
        return { ...state, destinationDateTime: action.payload };
    case DESTINATION_TIME_CHANGE:
        return { ...state, destinationTime: action.payload };
    case AIRLINE_CHANGE:
      return { ...state, airline: action.payload };
    case NOTES_CHANGE:
      return { ...state, notesChange: action.payload };
    case ADD_FLIGHT:
      return { ...state, loading: true };
    case ADD_FLIGHT_SUCCESS:
        return INITIAL_STATE;
    case ADD_FLIGHT_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
