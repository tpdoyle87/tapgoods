import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchFetchQuotes() {
  const { error, data } = yield call(
    API.fetchQuotes,
  );
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  };
  yield put({ type: actions.QUOTES_DATA_RECIEVED, data: data });
}

function* watchUpdateQuotes() {
  const {error, data } = yield call(
    API.fetchQuotes,
  );
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  };
  yield put({ type: actions.UPDATE_QUOTES_RECIEVED, data: data });
}

function* watchUpVoteQuoteIdReceived(action) {
  const { id, value } = action;
  const { error, data } = yield call(API.upVoteQuote, id, value);
  if (data.code === 400) {
    yield put({ type: actions.API_ERROR, code: data.code, msg: data.message });
    yield cancel();
    return;
  };
  if (error) {
    yield put({ type: actions.API_ERROR, code: error.code, msg: 'Something Went Wrong!!!' });
    yield cancel();
    return;
  };
  yield put({ type: actions.VOTE_RECIEVED, data, value: value });
}

function* watchAppLoad() {
  yield all([
    takeEvery(actions.FETCH_QUOTES, watchFetchQuotes),
    takeEvery(actions.FETCH_UPDATE_QUOTES, watchUpdateQuotes),
    takeEvery(actions.UPDATE_VOTES_RECIEVED, watchUpVoteQuoteIdReceived)
  ]);
}

export default [watchAppLoad];
