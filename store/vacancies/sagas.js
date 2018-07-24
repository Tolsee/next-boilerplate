import { takeLatest, fork, call, put } from "redux-saga/effects";

import api from "services/api";
import {
  FETCH_VACANCIES,
  FETCH_VACANCIES_SUCCEEDED,
  FETCH_VACANCY,
  FETCH_VACANCY_SUCCEEDED
} from "store/vacancies/actions";

function* fetchVacancies(action) {
  const vacancies = yield call(api.fetchAllPosts);
  yield put({ type: FETCH_VACANCIES_SUCCEEDED, payload: vacancies.data });
}

function* fetchVacancy({ payload }) {
  const vacancy = yield call(api.fetchPost, payload);
  yield put({ type: FETCH_VACANCY_SUCCEEDED, payload: vacancy.data });
}

function* watchFetchVacancies() {
  yield takeLatest(FETCH_VACANCIES, fetchVacancies);
}

function* watchFetchVacancy() {
  yield takeLatest(FETCH_VACANCY, fetchVacancy);
}

export default function* postsSagas() {
  yield fork(watchFetchVacancies);
  yield fork(watchFetchVacancy);
}
