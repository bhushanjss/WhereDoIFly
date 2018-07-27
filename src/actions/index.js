import firebase from 'firebase';

import { TITLE_CHANGE, ORIGIN_AIRPORT_CITY_CHANGE,
  DESTINATION_AIRPORT_CITY_CHANGE, ORIGIN_DATE_TIME_CHANGE,
  DESTINATION_DATE_TIME_CHANGE, AIRLINE_CHANGE, EMAIL_CHANGE,
  PASSWORD_CHANGE, RESET_LOGIN_FORM, LOGIN_USER_SUCCESS,
  CREATE_USER_SUCCESS, LOGIN_USER_FAILED } from './types';


//Add flight
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

//Login Login Form

export const emailChange = (text) => ({
  type: EMAIL_CHANGE,
  payload: text
});

export const passwordChange = (text) => ({
  type: PASSWORD_CHANGE,
  payload: text
});

export const resetLoginForm = () => ({
  type: RESET_LOGIN_FORM
});

export const loginUser = ({ email, password }) => (
   (dispatch) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => (
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
    ))
    .catch(error => (
      dispatch({ type: LOGIN_USER_FAILED, payload: error })
    ))
  )
);

export const createUser = ({ email, password }) => (
  (dispatch) => (
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then(user => (
     dispatch({ type: CREATE_USER_SUCCESS, payload: user })
   ))
 )
);
