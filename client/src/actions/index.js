import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";

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
        let resp = await axios(`http://localhost:3001/countries?name=${name}`)
        dispatch({
          type: SEARCH_BY_NAME,
          payload: resp.data,
        });
  
      } catch (error) {
  
      }
    }
  }