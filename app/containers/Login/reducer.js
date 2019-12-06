/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOGIN_FAIL } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_FAIL:
        draft.error = action.error;
    }
  });

export default loginReducer;
