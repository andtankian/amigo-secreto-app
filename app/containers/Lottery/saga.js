import { takeLatest, call, put } from 'redux-saga/effects';
import iziToast from 'izitoast';
import moment from 'moment';
import * as api from './api';
import { LOAD_FINAL_TIME } from './constants';
import { getModel } from '../../utils/general';
import { loadFinalTimeSuccess, timeout } from './actions';

function* loadFinalTime() {
  try {
    const response = yield call(api.loadFinalTime);
    const { finalTime } = getModel(response);
    if (moment(new Date(finalTime)).isBefore(new Date())) {
      yield put(timeout());
    } else {
      yield put(loadFinalTimeSuccess(finalTime));
    }
  } catch ({ message }) {
    iziToast.error({ message });
  }
}

// Individual exports for testing
export default function* lotterySaga() {
  yield takeLatest(LOAD_FINAL_TIME, loadFinalTime);
}
