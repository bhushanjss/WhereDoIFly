import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { TITLE_CHANGE, ORIGIN_AIRPORT_CITY_CHANGE,
  DESTINATION_AIRPORT_CITY_CHANGE, ORIGIN_DATE_TIME_CHANGE, ORIGIN_TIME_CHANGE,
  DESTINATION_DATE_TIME_CHANGE, DESTINATION_TIME_CHANGE, AIRLINE_CHANGE, EMAIL_CHANGE,
  NOTES_CHANGE, PASSWORD_CHANGE, CONFIRM_PASSWORD_CHANGE, RESET_LOGIN_FORM,
  LOGIN_USER_SUCCESS, LOGIN_USER_FAILED,
  LOGIN_USER, CREATE_USER, TOGGLE_ACCOUNT, ADD_FLIGHT,
  ADD_FLIGHT_SUCCESS, LOAD_FLIGHT,
  LOAD_FLIGHT_SUCCESS } from './types';


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
export const originTimeChange = (text) => ({
  type: ORIGIN_TIME_CHANGE,
  payload: text
});
export const destinationDateTimeChange = (text) => ({
  type: DESTINATION_DATE_TIME_CHANGE,
  payload: text
});
export const destinationTimeChange = (text) => ({
  type: DESTINATION_TIME_CHANGE,
  payload: text
});
export const airlineChange = (text) => ({
    type: AIRLINE_CHANGE,
    payload: text
});
export const notesChange = (text) => ({
  type: NOTES_CHANGE,
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

export const confirmPasswordChange = (text) => ({
  type: CONFIRM_PASSWORD_CHANGE,
  payload: text
});

export const toggleAccount = (val) => ({
  type: TOGGLE_ACCOUNT,
  payload: val
});

export const resetLoginForm = () => ({
  type: RESET_LOGIN_FORM
});

export const loginUser = ({ email, password }) => (
   (dispatch) => {
    dispatch({ type: LOGIN_USER });
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => loginUserFailed(dispatch, error));
  }
);

export const createUser = ({ email, password }) => (
  (dispatch) => {
   dispatch({ type: CREATE_USER });
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then(user => loginUserSuccess(dispatch, user))
   .catch(error => loginUserFailed(dispatch, error));
 }
);

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.showFlights({ type: 'reset' });
};

const loginUserFailed = (dispatch, error) => (
  dispatch({ type: LOGIN_USER_FAILED, payload: error })
);

export const addFlight = (flightObj) => (
  (dispatch) => {
    const { currentUser } = firebase.auth();
    dispatch({ type: ADD_FLIGHT });
    firebase.database().ref(`/users/${currentUser.uid}/flights`)
    .push(flightObj)
    .on('value', snapshot => {
      dispatch({ type: ADD_FLIGHT_SUCCESS, payload: snapshot.val() });
    });
  }
);

export const loadFlights = () => (
  (dispatch) => {
    const { currentUser } = firebase.auth();
    dispatch({ type: LOAD_FLIGHT });
    firebase.database().ref(`/users/${currentUser.uid}/flights`)
    .on('value', snapshot => (
      dispatch({ type: LOAD_FLIGHT_SUCCESS, payload: snapshot.val() })
    ));
  }
);
