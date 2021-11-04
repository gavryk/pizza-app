import React from "react";
import style from './Home.module.scss';
import {Categories, Sort, Pizza} from "../../components";

const Home = ({ items, categories, sortList }) => {
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
                {   items &&
                    <div className={`${style.pizzaWrapper} py-4`}>
                        {
                            items.map((item, index) => {
                                return(
                                    <Pizza
                                        key={item.id}
                                        imgUrl={item.imageUrl}
                                        name={ item.name }
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