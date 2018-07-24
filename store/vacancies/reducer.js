import {
  FETCH_VACANCIES_SUCCEEDED,
  FETCH_VACANCY_SUCCEEDED
} from "store/vacancies/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VACANCIES_SUCCEEDED:
      return { ...state, list: action.payload };
    case FETCH_VACANCY_SUCCEEDED:
      return { ...state, currentPost: action.payload };
    default:
      return state;
  }
}
