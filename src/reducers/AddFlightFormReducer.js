import { TITLE_CHANGE, ORIGIN_AIRPORT_CITY_CHANGE,
  DESTINATION_AIRPORT_CITY_CHANGE, ORIGIN_DATE_TIME_CHANGE,
  DESTINATION_DATE_TIME_CHANGE, AIRLINE_CHANGE } from '../actions/types';

const INITIAL_STATE =
{ title: '',
originAirportCity: '',
destinationAirportCity: '',
originDateTime: '',
destinationDateTime: '',
airline: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TITLE_CHANGE:
      return { ...state, title: action.payload };
    case ORIGIN_AIRPORT_CITY_CHANGE:
      return { ...state, originAirportCity: action.payload };
    case DESTINATION_AIRPORT_CITY_CHANGE:
      return { ...state, destinationAirportCity: action.payload };
    case ORIGIN_DATE_TIME_CHANGE:
        return { ...state, originDateTime: action.payload };
    case DESTINATION_DATE_TIME_CHANGE:
        return { ...state, destinationDateTime: action.payload };
    case AIRLINE_CHANGE:
      return { ...state, airline: action.payload };
    default:
      return state;
  }
};
