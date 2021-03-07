import * as types from '../actions';

export default function(state = [], action) {
  const response = action.user;
  // console.log('action', action)
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user:action.payload.user };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};