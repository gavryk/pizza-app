import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import style from './Cart.module.scss';

const Cart = () => {
    return (
        <div className={ style.cartPageContainer }>
            <div className={`${ style.cartPageContainer__top } d-flex align-items-center justify-content-between`}>
                <h2 className={`${ style.title } d-flex align-items-center justify-content-start`}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Cart</span>
                </h2>
                <div className={`${ style.clearCart }`}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Clear Cart</span>
                </div>
            </div>

            <div className={ style.cartWrapper }>
                
            </div>
        </div>
    )
}

export default Cart;