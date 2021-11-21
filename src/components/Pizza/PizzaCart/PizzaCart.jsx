import React from "react";
import style from './PizzaCart.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle as farTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";

const PizzaCart = ({ 
    id, name, type, size, imgUrl, 
    totalPricePizzas, totalCountPizzas, removeItem,
    onMinus, onPlus 
}) => {
    
    const handleRemoveClick = () => {
        removeItem(id);
    }
    
    const handlePlus = () => {
        onPlus(id);
    } 

    const handleMinus = () => {
        onMinus(id);
    } 

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
                <button onClick={ handleMinus } className="btn-minus">
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <span>{ totalCountPizzas }</span>
                <button onClick={ handlePlus } className='btn-plus'>
                    <FontAwesomeIcon icon={faPlusCircle} /> 
                </button>
            </div>
            <div className={ style.cartItem__price }>
                <span>{ totalPricePizzas } &#8372;</span>
            </div>
            <div className={ style.cartItem__remove }>
                <button onClick={ handleRemoveClick } className={ style.btnRemove }>
                    <FontAwesomeIcon icon={farTimesCircle} />
                </button>
            </div>
        </div>
    )
}

export default PizzaCart;