import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import style from './Home.module.scss';
import {Categories} from "../../components";

const Home = ({ categories }) => {
    return (
        <div className={`${ style.content__top } d-flex justify-content-between`}>
            <div className={`${ style.categories } col-8`}>
                <Categories items={ categories }/>
            </div>
            <div className="sort">
                <div className="sort__label">
                    <FontAwesomeIcon icon={faCaretUp} />
                    <b>Sort By:</b>
                    <span>Popular</span>
                </div>
                <div className="sort__popup">
                    <ul>
                        <li className="active">Popular</li>
                        <li>Price</li>
                        <li>Alphabet</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;