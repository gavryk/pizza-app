import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';
import settings from './settings';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
    settings
});

export default rootReducer;