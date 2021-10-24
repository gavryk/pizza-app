import './App.scss'
import Header from "./components/Header/Header";
import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";

const App = () => {
    let catList = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header />

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
