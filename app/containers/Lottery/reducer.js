/*
 *
 * Lottery reducer
 *
 */
import produce from 'immer';
import { LOAD_FINAL_TIME_SUCCESS, TIMEOUT_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const lotteryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FINAL_TIME_SUCCESS:
        draft.finalTime = action.finalTime;
        draft.timeout = false;
        break;
      case TIMEOUT_SUCCESS: {
        draft.timeout = true;
        draft.profile = action.profile;
      }
    }
  });

export default lotteryReducer;
