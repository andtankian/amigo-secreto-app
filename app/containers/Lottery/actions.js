/*
 *
 * Lottery actions
 *
 */

import { LOAD_FINAL_TIME, LOAD_FINAL_TIME_SUCCESS, TIMEOUT } from './constants';

export function loadFinalTime() {
  return {
    type: LOAD_FINAL_TIME,
  };
}
export function loadFinalTimeSuccess(finalTime) {
  return {
    type: LOAD_FINAL_TIME_SUCCESS,
    finalTime,
  };
}

export function timeout() {
  return {
    type: TIMEOUT,
  };
}
