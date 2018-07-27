import { EMAIL_CHANGE, PASSWORD_CHANGE,
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, RESET_LOGIN_FORM } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  showCreateUser: false,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false, password: '' };
    case RESET_LOGIN_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
