import './App.scss'
import React, {useEffect} from "react";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import {Header} from "./components";
import { useDispatch, useSelector } from 'react-redux';
import {toggleAppTheme } from './redux/actions/settings';

const App = () => {
    const dispatch = useDispatch();
    const theme = useSelector(({settings}) => settings.theme);

    useEffect(() => {
        theme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, [theme]);
    
    
    const toggleMode = () => {
        dispatch(toggleAppTheme()); 
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
