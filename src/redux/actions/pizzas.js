import axios from "axios";

export const fetchPizzas = () => {
    return dispatch => {
        axios.get('http://localhost:3001/pizzas')
            .then(({ data }) => {
                dispatch(setPizzas(data));
                dispatch(setLoading());
            })
    }
}

export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

export const setLoading = () => {
    return {
        type: 'SET_LOADING',
    }
}