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

function* updateProfile({ profile }) {
  try {
    const suggestions = getSuggestions(profile);
    yield call(api.clearAllSuggestions, profile.id);
    yield addSuggestions(suggestions);
    const response = yield call(api.updateProfile, profile);
    const updatedProfile = getModel(response);
    yield put(actions.updateProfileSuccess(updatedProfile));
    iziToast.success({ message: 'Alterações realizadas.' });
  } catch ({ message }) {
    iziToast.error({ message });
    yield put(actions.updateProfileFail());
  }
}

function* addSuggestions(suggestions) {
  const allSuggestions = [];
  for (let index = 0; index < suggestions.length; index++) { // eslint-disable-line
    const suggestion = suggestions[index];
    const registeredSuggestion = yield call(api.addSuggestion, suggestion);
    allSuggestions.push(registeredSuggestion);
  }
  return allSuggestions;
}

function getSuggestions(profile) {
  return Object.keys(profile)
    .filter(key => key.includes('description'))
    .map(key => ({
      'profile.id': profile.id,
      description: profile[key],
    }));
}

// Individual exports for testing
export default function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfile);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}
