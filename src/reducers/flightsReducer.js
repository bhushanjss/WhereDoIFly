import { LOAD_FLIGHT, LOAD_FLIGHT_SUCCESS,
  LOAD_FLIGHT_FAILED } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  values: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FLIGHT:
      return { ...state, loading: true };
    case LOAD_FLIGHT_SUCCESS:
      return { ...state, loading: false, values: action.payload };
    case LOAD_FLIGHT_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
