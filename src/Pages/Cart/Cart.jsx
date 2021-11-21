import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import style from './Cart.module.scss';
import { useSelector } from "react-redux";
import { PizzaCart } from "../../components";

const Cart = () => {
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

    const cartPizzas = Object.keys(items).map((key) => {
        return items[key][0];
    });

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
                {
                    cartPizzas &&
                    cartPizzas.map(item => {
                        return (
                            <PizzaCart
                                imgUrl={ item.imageUrl }
                                name={ item.name }
                                type={ item.type }
                                size={ item.size }
                                price={ item.price }
                            />
                        )
                    }) 
                }
            </div>

            <div className={ style.cartPageContainer__total }>
                <div className={ style.cartTotalCount }>
                    <span>Total Pizzas: </span>
                    <span className={ style.count }> { totalCount } pcs</span>
                </div>
                <div className={ style.cartTotalPrice }>
                    <span>Order amount: </span>
                    <span className={ style.price }>{ totalPrice } &#8372;</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;