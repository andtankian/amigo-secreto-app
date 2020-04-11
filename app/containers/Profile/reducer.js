/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOAD_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOAD_PROFILE_SUCCESS:
        draft.profile = action.profile;
        break;
      case UPDATE_PROFILE:
        draft.saveButtonLoading = true;
        break;
      case UPDATE_PROFILE_SUCCESS:
        draft.saveButtonLoading = false;
        break;
      case UPDATE_PROFILE_FAIL:
        draft.saveButtonLoading = false;
        break;
    }
  });

export default profileReducer;
