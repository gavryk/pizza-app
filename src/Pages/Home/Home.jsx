import React from "react";
import style from './Home.module.scss';
import {Categories, Sort} from "../../components";

const Home = ({ categories, sortList }) => {

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
                <h2>All Pizza</h2>
            </div>
        </div>
    )
}

export default Home;