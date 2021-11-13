import React, {useEffect, useState} from "react";
import style from './Home.module.scss';
import {Categories, Sort, Pizza} from "../../components";
import axios from "axios";

const Home = ({ categories, sortList }) => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => setPizzas(data.pizzas));
    }, []);

    return (
        <div className={style.homeContent}>
            <div className={`${ style.content__top } d-flex justify-content-between`}>
                <div className='col-8'>
                    <Categories catClickItem={ (name) => console.log(name) } items={ categories }/>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Sort sortList={ sortList } />
                </div>
            </div>
            <div className={`${style.mainContent} pt-1 pb-3 px-4`}>
                <h2 className=''>All Pizza</h2>
                {   pizzas &&
                    <div className={`${style.pizzaWrapper} py-4`}>
                        {
                            pizzas.map((item, index) => {
                                return(
                                    <Pizza
                                        key={item.id}
                                        { ...item }
                                    />
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;