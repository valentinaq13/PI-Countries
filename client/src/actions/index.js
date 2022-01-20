import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SORT = "SORT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"


export function getCountries() {
  return function (dispatch) {
    axios.get('http://localhost:3001/countries')
      .then((resp) => {
        return dispatch({
          type: GET_COUNTRIES,
          payload: resp.data
        })
      })
      .catch((datos) => console.error(datos))
  }
};

export function searchByName(name) {
  return async function (dispatch) {
    try {
      let resp = await axios.get(`http://localhost:3001/countries?name=${name}`)
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: resp.data
      });
    } catch (error) {
      console.log(error.status)
      if (error.response.status === 404) { alert("No se encontro pais") }
      else { console.log(error, JSON.stringify(error)) }
    }
  }
}

export function sortFunction(payload) {
  return {
    type: SORT,
    payload
  }
}

export function filterByContinent(payload) {
  return {
    type: FILTER_CONTINENT,
    payload
  }
}
export function postActivity(input) {
  return async function () {
    try {
      const response = await axios.post("http://localhost:3001/activity", input)
      return response;
    } catch (e) { console.log(e) };
  }

}
export function getActivities() {
  return async function (dispatch) {
    try {
      let resul = await axios.get(`http://localhost:3001/activity`);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: resul.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByActivities(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload
  }
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let det = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: GET_DETAIL,
        payload: det.data
      })
    } catch (e) { console.log(e) }
  }
}