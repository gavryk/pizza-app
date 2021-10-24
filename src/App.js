import './App.scss'
import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import {Header} from "./components";

const App = () => {
    let catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header/>
               <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home categories={ catList } />
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
