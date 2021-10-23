import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Home = () => {
    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    <li className="active">All</li>
                    <li>Meat</li>
                    <li>Vegetarian</li>
                    <li>Grill</li>
                    <li>Sharp</li>
                    <li>Closed</li>
                </ul>
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