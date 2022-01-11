import { GET_COUNTRIES, FILTER_BY_NAME, SEARCH_BY_NAME } from '../actions'

const initialState = {
    countries: [],
    allCountries: []
    
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload //quiero que es éste estado tambien me guarde todos los personajes para limpiar el filtro
            }
        case SEARCH_BY_NAME: 
        return{
            //...state, 
            countries: action.payload
        }
        //    case FILTER_BY_NAME:
        //        const allCountries = state.countries //me traigo el estado de countries para filtrar en ésta const
        case FILTER_BY_NAME:
            let sort = action.payload === "asc" ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) : //sino, va a ser "desc"
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state, countries: sort
            }



        default: return state;

    }
}

export default rootReducer
