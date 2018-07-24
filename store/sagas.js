import { all } from "redux-saga/effects";

import vacancySagas from "store/vacancies/sagas";

export default function* rootSaga(services = {}) {
  yield all([vacancySagas()]);
}
