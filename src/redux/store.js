import {compose, createStore} from "redux";
import rootReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, composeEnhancers);

window.store = store;

export default store;