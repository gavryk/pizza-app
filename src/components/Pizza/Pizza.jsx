import React, {useState} from "react";
import style from './Pizza.module.scss'
import Button from "../Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Pizza = ({ id, imageUrl, name, price, types, sizes, addToCart, inCartCount}) => {
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);

    const availableTypes = ['thin', 'traditional'];
    const availableSizes = [26, 30, 40];

    const onSelectType = (ind) => {
        setActiveType(ind);
    }
    const onSelectSize = (ind) => {
        setActiveSize(ind);
    }

    const addPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType]
        }
        addToCart(obj);
    }

    return (
        <div className={ `${style.pizzaBlock}` }>
            <img className={`${ style.pizzaBlock__image } mb-2`} src={ imageUrl } alt="Pizza" />
            <h4 className={ style.pizzaBlock__title }>{ name }</h4>
            <div className={ style.pizzaBlock__selector }>
                <ul>
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            className={`${ activeType === index ? style.active : '' } ${ !types.includes(index) && style.disabled } mb-2`}
                            onClick={ () => onSelectType(index) }
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li
                            key={size}
                            className={ `${ activeSize === index ? style.active : '' } ${ !sizes.includes(size) && style.disabled }` }
                            onClick={() => onSelectSize(index) }
                        >
                            {size} sm
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${ style.pizzaBlock__bottom } py-4`}>
                <div className={ style.pizzaPrice }>
                    <span>From { price } &#8372;</span>
                </div>
                <div className={ style.addButton }>
                    <Button border onClick={addPizza}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add
                        { inCartCount && <span className={ style.countInCart }>{ inCartCount }</span> }
                    </Button>
                </div>
            </div>
        </div>
    )
}

Pizza.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    addToCart: PropTypes.func,
    inCartCount: PropTypes.number
}

Pizza.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: []
}

export default Pizza;