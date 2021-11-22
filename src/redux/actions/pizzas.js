import axios from "axios";

//"server": "npx json-server --watch db.json --port=3001"
export const fetchPizzas = (category, sortBy) => {
    let catQuery = category !== null ? `category=${category}&` : '';
    return dispatch => {
        dispatch(setLoading(false));
        axios.get(`/pizzas?${catQuery}_sort=${sortBy.type}&order=${sortBy.order}`)
            .then(({ data }) => {
                dispatch(setPizzas(data));
                dispatch(setLoading(true));
            })
    }
}

export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const setLoading = (payload) => {
    return {
        type: 'SET_LOADING',
        payload
    }
}