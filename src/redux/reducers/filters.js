const initState = {
    category: null,
    sortBy: 'popular',
};

const filters = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state;
    }
}

export default filters;