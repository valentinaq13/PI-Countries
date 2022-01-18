import { GET_COUNTRIES, FILTER_BY_NAME, SEARCH_BY_NAME, GET_DETAIL, FILTER_CONTINENT, GET_ACTIVITIES, FILTER_ACTIVITY, SORT } from '../actions'

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
    populations: []

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
            return {
                ...state,
                countries: action.payload
            }

        case FILTER_CONTINENT:
            const allCountries = state.allCountries
            const statusFiltered = allCountries.filter(el => el.continent === action.payload)
            return {
                ...state, countries: statusFiltered,
            }

        case GET_DETAIL:
            return {
                ...state, detail: action.payload
            }

        case GET_ACTIVITIES:
            return {
                ...state, activities: action.payload
            }

        case FILTER_ACTIVITY:
            const actFiltered = state.countries.filter(c => c.activities && c.activities.map(a => a.name).includes(action.payload))
            return {
                ...state, countries: actFiltered,
            }

        case SORT:
            let data
            action.payload === 'max' ? data = state.countries.sort((a, b) => a.population < b.population ? 1 : -1) :
                action.payload === 'min' ? data = state.countries.sort((a, b) => a.population > b.population ? 1 : -1) :
                    action.payload === 'asc' ? data = state.countries.sort((a, z) => a.name > z.name ? 1 : -1) :
                        action.payload === 'desc' ? data = state.countries.sort((a, z) => a.name < z.name ? 1 : -1) :
                            data = state.countries

            return {
                ...state,
                countries: data.map(e => e)
            }


        default: return state;

    }
}

export default rootReducer
