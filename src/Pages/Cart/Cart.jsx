import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faChevronLeft, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import style from './Cart.module.scss';
import { useSelector } from "react-redux";
import { PizzaCart } from "../../components";
import { useDispatch } from "react-redux";
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from "../../redux/actions/cart";
import { Button } from "../../components";
import cartEmptyImage from '../../assets/img/empty-cart.png';
import { NavLink } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

    const cartPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Are you sure you want to empty the cart?')) {
            dispatch(clearCart());
        }
    }

    const removeItem = (id) => {
        if (window.confirm('Are you sure you want to delete pizza?')) {
            dispatch(removeCartItem(id));
        }
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }

    const onClickToOrder = () => {
        console.log('Your Order: ', items);
    }

    return (
        <>
            {
                totalCount 
                ? (
                    <div className={ style.cartPageContainer }>
                    <div className={`${ style.cartPageContainer__top } d-flex align-items-center justify-content-between`}>
                        <h2 className={`${ style.title } d-flex align-items-center justify-content-start`}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>Cart</span>
                        </h2>
                        <div onClick={ onClearCart } className={`${ style.clearCart }`}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                            <span>Clear Cart</span>
                        </div>
                    </div>
        
                    <div className={ style.cartWrapper }>
                        {
                            cartPizzas &&
                            cartPizzas.map((item, index) => {
                                return (
                                    <PizzaCart
                                        id={ item.id }
                                        key={`${item.id}_${index}`}
                                        imgUrl={ item.imageUrl }
                                        name={ item.name }
                                        type={ item.type }
                                        size={ item.size }
                                        price={ item.price }
                                        totalPricePizzas={ items[item.id].totalPrice }
                                        totalCountPizzas={ items[item.id].items.length }
                                        removeItem={ removeItem }
                                        onPlus={ onPlusItem }
                                        onMinus={ onMinusItem }
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
        
                    <div className={ style.cartPageContainer__bottom }>
                        <Button border>
                            <NavLink to='/'>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                Come Back
                            </NavLink>
                        </Button>
                        <Button border active onClick={ onClickToOrder }>
                            <span>Pay Now</span>
                        </Button>
                    </div>
                </div> 
                )
                : (
                    <div className={ style.emptyCart }>
                        <div className={ style.emptyCart__title }>
                            <h1>
                                Cart is empty <i>😕</i>
                            </h1>
                            <p>
                                Most likely you haven't ordered pizza yet.
                                <br />
                                To order pizza, go to the main page.
                            </p>
                        </div>
                        <div className={ style.emptyCart__image }>
                            <img src={cartEmptyImage} alt="Empty cart" />
                        </div>
                        <div className={ style.emptyCart__btn }>
                            <Button active>
                                <NavLink to="/">
                                    Come Back
                                </NavLink>
                            </Button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Cart;