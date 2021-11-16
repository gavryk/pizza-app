import './App.scss'
import React, {useEffect, useState} from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import {Header} from "./components";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(false);

    window.test = () => {
        axios.get('http://localhost:3001/pizzas')
            .then(({ data }) => {
                dispatch(setPizzas(data.pizzas));
            });
    }
    
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => {
                dispatch(setPizzas(data.pizzas));
            });


        //Get LocalStorage Theme
        const json = localStorage.getItem("theme");
        const currentMode = JSON.parse(json);
        currentMode && setTheme(!theme);
    }, []);


    React.useEffect(() => {
        theme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
        const json = JSON.stringify(theme);
        localStorage.setItem("theme", json);
    }, [theme]);

    const toggleMode = () => {
        setTheme(!theme);
    }

    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header mode={ theme } toggleMode={ toggleMode } />
               <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/cart'>
                            <Cart />
                        </Route>
                    </Switch>
               </div>
           </div>
        </div>
    );
}



export default App;
