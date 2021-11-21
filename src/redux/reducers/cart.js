const initState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id] 
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const itms = Object.values(newItems).map(obj => obj.items);
            const countItems = [].concat.apply([], itms);
            const totalPrice = getTotalPrice(countItems);

            return {
                ...state,
                items: newItems,
                totalCount: countItems.length,
                totalPrice
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