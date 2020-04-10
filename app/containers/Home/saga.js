import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { POWER_OFF } from './constants';

function* powerOff() {
  localStorage.clear();
  yield put(push('/'));
}

// Individual exports for testing
export default function* homeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(POWER_OFF, powerOff);
}
