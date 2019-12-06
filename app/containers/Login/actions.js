/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function tryToLogin(credentials) {
  return {
    type: LOGIN,
    credentials,
  };
}
export function loginSuccess(loggedIn) {
  return {
    type: LOGIN_SUCCESS,
    loggedIn,
  };
}
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}
