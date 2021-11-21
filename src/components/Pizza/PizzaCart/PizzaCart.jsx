import React from "react";
import style from './PizzaCart.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle as farTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";

const PizzaCart = ({ name, type, size, imgUrl, totalPricePizzas, totalCountPizzas }) => {
    return (
        <div className={ style.cartItem }>
            <div className={ style.cartItem__image }>
                <img src={ imgUrl } alt="" />
            </div>
            <div className={ style.cartItem__name }>
                <h4>{ name }</h4>
                <p>{ type }, { size } sm</p>
            </div>
            <div className={ style.cartItem__count }>
                <button className="btn-minus">
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <span>{ totalCountPizzas }</span>
                <button className='btn-plus'>
                    <FontAwesomeIcon icon={faPlusCircle} /> 
                </button>
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