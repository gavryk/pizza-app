const initState = {
    item: {},
    totalPrice: 0,
    totalCount: 0
};

const cart = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            return {
                ...state,
                items: {
                    [action.payload.id]: [
                        ...state.items[action.payload.id],
                        action.payload                    
                    ]
                }
            }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload
            }
        default:
            return state;
    }
}

export default cart;