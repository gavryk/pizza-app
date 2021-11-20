const initState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const cart = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload],
            }
            let countItems = [].concat.apply([], Object.values(newItems));
            let countItemsPrice = countItems.reduce((sum, obj) => obj.price + sum, 0);
            
            return {
                ...state,
                items: newItems,
                totalCount: countItems.length,
                totalPrice: countItemsPrice
            };

        }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload
            };
        default:
            return state;
    }
}

export default cart;