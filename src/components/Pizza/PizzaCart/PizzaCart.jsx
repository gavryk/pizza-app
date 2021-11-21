import React from "react";
import style from './PizzaCart.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle as farTimesCircle} from "@fortawesome/free-regular-svg-icons";

const PizzaCart = ({ name, type, size, imgUrl, price, totalPricePizzas }) => {
    return (
        <div className={ style.cartItem }>
            <div className={ style.cartItem__image }>
                <img src={ imgUrl } alt="" />
            </div>
            <div className={ style.cartItem__name }>
                <h4>{ name }</h4>
                <p>{ type }, { size } sm</p>
            </div>
            <div className={ style.cartItem__price }>
                <span>{ totalPricePizzas } &#8372;</span>
            </div>
            <div className={ style.cartItem__remove }>
                <button className={ style.btnRemove }>
                    <FontAwesomeIcon icon={farTimesCircle} />
                </button>
            </div>
        </div>
    )
}

export default PizzaCart;