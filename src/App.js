import './App.scss'
import Header from "./components/Header/Header";
import React from "react";
import Home from "./Pages/Home/Home";
import {Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <div className="app_wrapper">
           <div className="container-fluid">
               <Header />

               <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
               </div>
           </div>
        </div>
    );
}

export default App;
