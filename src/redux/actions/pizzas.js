import axios from "axios";

export const fetchPizzas = () => {
    return dispatch => {
        dispatch(setLoading(false));
        axios.get('http://localhost:3001/pizzas')
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