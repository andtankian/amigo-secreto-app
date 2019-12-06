/*
 *
 * Feed actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_FEED,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadFeed() {
  return {
    type: LOAD_FEED,
  };
}
export function loadFeedSuccess(people) {
  return {
    type: LOAD_FEED_SUCCESS,
    people,
  };
}
export function loadFeedFail(error) {
  return {
    type: LOAD_FEED_FAIL,
    error,
  };
}
