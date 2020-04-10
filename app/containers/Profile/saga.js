import { takeLatest, call, put } from 'redux-saga/effects';
import iziToast from 'izitoast';
import * as api from './api';
import * as actions from './actions';
import { getModel } from '../../utils/general';
import { LOAD_PROFILE, UPDATE_PROFILE } from './constants';

function* loadProfile() {
  try {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    const response = yield call(api.loadProfile, loggedIn.user.id);
    const profile = getModel(response);
    yield put(actions.loadProfilesuccess(profile));
  } catch ({ message }) {
    iziToast.error({
      message,
    });
  }
}

function* updateProfile(action) {
  try {
    const newSuggestions = getNewSuggestions(action.profile);
    console.log(newSuggestions);
    yield call(addSuggestions, newSuggestions);
    // const oldSuggestions = getOldSuggestions(action.profile);
    // yield call(api.updateSuggestions, oldSuggestions);
    yield call(api.updateProfile, action.profile);
    yield put(actions.updateProfileSuccess(action.profile));
    iziToast.success({ message: 'Alterações realizadas.' });
  } catch ({ message }) {
    iziToast.error({ message });
  }
}

// function getOldSuggestions(profile) {
//   return getSuggestionsByType('old', profile);
// }

function getNewSuggestions(profile) {
  return getSuggestionsByType('new', profile);
}

async function addSuggestions(suggestions) {
  const requests = suggestions.map(suggestion => api.addSuggestion(suggestion));
  await Promise.all(requests);
}

function getSuggestionsByType(type, profile) {
  return Object.keys(profile)
    .filter(key => key.startsWith(type))
    .map(key => ({ 'profile.id': profile.id, description: profile[key] }));
}

// Individual exports for testing
export default function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfile);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}
