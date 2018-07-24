import { TITLE_CHANGE, ORIGIN_AIRPORT_CITY_CHANGE,
  DESTINATION_AIRPORT_CITY_CHANGE, ORIGIN_DATE_TIME_CHANGE,
  DESTINATION_DATE_TIME_CHANGE, AIRLINE_CHANGE } from './types';

export const titleChange = (text) => ({
    type: TITLE_CHANGE,
    payload: text
});
export const originAirportCityChange = (text) => ({
  type: ORIGIN_AIRPORT_CITY_CHANGE,
  payload: text
});
export const destinationAirportCityChange = (text) => ({
    type: DESTINATION_AIRPORT_CITY_CHANGE,
    payload: text
});
export const originDateTimeChange = (text) => ({
    type: ORIGIN_DATE_TIME_CHANGE,
    payload: text
  });
export const destinationDateTimeChange = (text) => ({
  type: DESTINATION_DATE_TIME_CHANGE,
  payload: text
});
export const airlineChange = (text) => ({
    type: AIRLINE_CHANGE,
    payload: text
});
