/*
 *
 * Feed reducer
 *
 */
import produce from 'immer';
import { LOAD_FEED_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const feedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FEED_SUCCESS:
        draft.people = action.people;
        break;
    }
  });

export default feedReducer;
