import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

const Sort = () => {
    return (
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
    )
}

export default Sort;