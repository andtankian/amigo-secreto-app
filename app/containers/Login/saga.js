import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import izitoast from 'izitoast';
import * as api from './api';
import * as actions from './actions';
import { LOGIN } from './constants';
import { getModel } from '../../utils/general';

function* tryToLogin({ credentials }) {
  try {
    const response = yield call(api.tryToLogin, credentials);
    const loggedIn = getModel(response);
    yield put(push('/home'));
    yield put(actions.loginSuccess(loggedIn));
  } catch ({ message }) {
    izitoast.error({
      title: 'Ops',
      message,
    });
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(LOGIN, tryToLogin);
}
