import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { saveTheme } from './redux/actions/settings';

store.subscribe(() => {
    saveTheme(store.getState().settings.theme);
})

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);