import { takeLatest, call, put } from 'redux-saga/effects';
import iziToast from 'izitoast';
import moment from 'moment';
import * as api from './api';
import * as profileApi from '../Profile/api';
import { LOAD_FINAL_TIME, TIMEOUT } from './constants';
import { getModel } from '../../utils/general';
import {
  loadFinalTimeSuccess,
  timeout as actionTimeout,
  timeoutSuccess,
} from './actions';

function* loadFinalTime() {
  try {
    const response = yield call(api.loadFinalTime);
    let finalTime = response.data;
    finalTime = new Date(finalTime).getTime() + 60000 * 5;
    if (moment(new Date(finalTime)).isBefore(new Date())) {
      yield put(actionTimeout());
    } else {
      yield put(loadFinalTimeSuccess(finalTime));
    }
  } catch ({ message }) {
    iziToast.error({ message });
  }
}

function* timeout() {
  try {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    const responseProfile = yield call(
      profileApi.loadProfile,
      loggedIn.user.id,
    );
    const profile = getModel(responseProfile);
    yield put(timeoutSuccess(profile));
  } catch ({ message }) {
    iziToast.error({ message });
  }
}

// Individual exports for testing
export default function* lotterySaga() {
  yield takeLatest(LOAD_FINAL_TIME, loadFinalTime);
  yield takeLatest(TIMEOUT, timeout);
}
