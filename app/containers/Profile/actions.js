/*
 *
 * Profile actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadProfile(profileId) {
  return {
    type: LOAD_PROFILE,
    profileId,
  };
}
export function loadProfilesuccess(profile) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
  };
}
export function updateProfile(profile) {
  return {
    type: UPDATE_PROFILE,
    profile,
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    profile,
  };
}
export function updateProfileFail() {
  return {
    type: UPDATE_PROFILE_FAIL,
  };
}
