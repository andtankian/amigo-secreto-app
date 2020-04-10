import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import izitoast from 'izitoast';
import querystring from 'query-string';
import * as api from './api';
import { LOGIN, REGISTER } from './constants';
import { getModel } from '../../utils/general';

function* tryToLogin({ credentials }) {
  try {
    const response = yield call(api.tryToLogin, credentials);
    const loggedIn = getModel(response);
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    yield put(push('/home'));
  } catch ({ message }) {
    izitoast.error({
      title: 'Ops',
      message,
    });
  }
}

function* register({
  manipulator: {
    profile: { login, password },
    loginController,
  },
}) {
  try {
    const response = yield call(
      api.register,
      querystring.stringify({ username: login, password }),
    );
    const registeredProfile = getModel(response);
    loginController.setIsBackFaceState(false);
    izitoast.success({
      message: `${
        registeredProfile.username
      }, você foi cadastrado com sucesso.`,
    });
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
  yield takeLatest(REGISTER, register);
}
