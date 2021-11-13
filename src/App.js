import './App.scss'
import React, {useEffect, useState} from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import {Button, Header} from "./components";
import axios from "axios";

const App = () => {
    let catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
    let sortList = [
        {name: 'Popular', type: 'popular'},
        {name: 'Price', type: 'price'},
        {name: 'Alphabet', type: 'alphabet'}
    ];

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => setPizzas(data.pizzas));
    }, []);

    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header/>
               <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home
                                items={ pizzas }
                                categories={ catList }
                                sortList={ sortList }
                            />
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
