import { takeLatest, call, put } from 'redux-saga/effects';
import iziToast from 'izitoast';
import { LOAD_FEED } from './constants';
import * as api from './api';
import { getModels } from '../../utils/general';
import { loadFeedSuccess } from './actions';

function* loadFeed() {
  try {
    const response = yield call(api.loadFeed);
    const people = getModels(response);
    yield put(loadFeedSuccess(people));
  } catch ({ message }) {
    iziToast.error({
      message,
    });
  }
}

// Individual exports for testing
export default function* feedSaga() {
  yield takeLatest(LOAD_FEED, loadFeed);
}
