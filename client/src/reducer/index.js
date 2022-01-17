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
            const allCountries = state.allCountries //me traigo el estado de countries para filtrar en ésta const
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
            if (action.payload === "max") { return { ...state, countries: state.countries.sort((a, b) => a.population - b.population) } }

            if (action.payload === "min") { return { ...state, countries: state.countries.sort((a, b) => b.population - a.population) } }

            if (action.payload === "asc") {
                return {
                    ...state, countries: state.countries.sort((a, b) => {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
                        return 0
                    })
                }
            }
            if (action.payload === "desc") {
                return {
                    ...state, countries: state.countries.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                        if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                        return 0
                    }),
                };
            }

        default: return state;

    }
}

export default rootReducer
