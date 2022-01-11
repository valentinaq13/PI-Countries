import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const PAGED = "PAGED"

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
        let resp = await axios("http://localhost:3001/countries?name=" + name)
        return dispatch({
          type: SEARCH_BY_NAME,
          payload: resp.data
        });
  
      } catch (error) {
        console.log(error)
  
      }
    }
  }

  export function filterByLetter(payload){
    return {
      type: FILTER_BY_NAME,
      payload
    }
  }

  