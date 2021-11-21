export const addPizzaToCart = (pizzaObj) => {
    return {
        type: 'ADD_PIZZA_CART',
        payload: pizzaObj
    }
}

export const setTotalPrice = (payload) => {
    return {
        type: 'SET_TOTAL_PRICE',
        payload: payload
    }
}

export const setTotalCount = (payload) => {
    return {
        type: 'SET_TOTAL_PRICE',
        payload: payload
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}