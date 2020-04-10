/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, REGISTER_SUCCESS, LOGIN_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case REGISTER_SUCCESS:
        draft.success = true;
        break;
      case LOGIN_SUCCESS:
        draft.loggedIn = action.loggedIn;
    }
  });

export default loginReducer;
