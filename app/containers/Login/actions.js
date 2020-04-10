/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
} from './constants';

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
export function register(manipulator) {
  return {
    type: REGISTER,
    manipulator,
  };
}
export function registerSuccess(profile) {
  return {
    type: REGISTER_SUCCESS,
    profile,
  };
}
