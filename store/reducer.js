import { combineReducers } from "redux";

import vacancyReducer from "store/vacancies/reducer";

const reducers = {
  vacancies: vacancyReducer
};

export default combineReducers(reducers);
