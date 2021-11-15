import './App.scss'
import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import {Header} from "./components";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => {
                dispatch(setPizzas(data.pizzas));
            });
    }, []);

    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header/>
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
