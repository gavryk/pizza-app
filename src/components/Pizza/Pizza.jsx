import React from "react";
import style from './Pizza.module.scss'

const Pizza = ({ imgUrl, name }) => {
    return (
        <div className={ style.pizzaBlock }>
            <img className={`${ style.pizzaBlockImage } mb-2`} src={ imgUrl } alt="Pizza" />
            <h4 className={ style.pizzaBlockTitle }>{ name }</h4>
            <div className="pizza-block__selector">
                <ul>

                </ul>
                <ul>

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">

                </div>

            </div>
        </div>
    )
}

export default Pizza;