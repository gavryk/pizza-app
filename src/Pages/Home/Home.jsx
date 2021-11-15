import React, {useEffect, useState} from "react";
import style from './Home.module.scss';
import {Categories, Sort, Pizza} from "../../components";
import axios from "axios";
import {setPizzas} from "../../redux/actions/pizzas";
import { connect } from "react-redux";

const Home = ({ categories, sortList, ...props }) => {
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => {
                props.setPizzas(data.pizzas);
            });
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
                {   props.items &&
                    <div className={`${style.pizzaWrapper} py-4`}>
                        {
                            props.items.map((item, index) => {
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

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = {
    setPizzas
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => {
//             dispatch(setPizzas(items))
//         }
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);