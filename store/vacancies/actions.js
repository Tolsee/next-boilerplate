export const FETCH_VACANCIES = "FETCH_VACANCIES";
export const FETCH_VACANCIES_SUCCEEDED = "FETCH_VACANCIES_SUCCEEDED";
export const FETCH_VACANCY = "FETCH_VACANCY";
export const FETCH_VACANCY_SUCCEEDED = "FETCH_VACANCY_SUCCEEDED";

export function fetchVacancies() {
  return { type: FETCH_VACANCIES };
}

export function fetchVacancy(id) {
  return { type: FETCH_VACANCY, payload: id };
}
