import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { createStore } from 'redux';

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log('store changed', store.getState()));

console.log(store.getState());

store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/decremented' });

ReactDOM.render(
    <Router>
        <App />
    </Router>,
  document.getElementById('root')
);