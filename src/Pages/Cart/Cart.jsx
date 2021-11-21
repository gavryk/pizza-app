import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import style from './Cart.module.scss';
import { useSelector } from "react-redux";
import { PizzaCart } from "../../components";

const Cart = () => {
    const { items, totalPrice, totalCOunt } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
      });

      console.log(addedPizzas);

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
                <PizzaCart
                    imgUrl='https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg'
                    name='Pizza Test'
                    type='thin'
                    size={ 26 }
                    price={ 850 }
                />
            </div>
        </div>
    )
}

export default Cart;