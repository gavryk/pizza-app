import React from "react";
import style from './Pizza.module.scss'
import Button from "../Button/Button";

const Pizza = ({ imageUrl, name, price, ...props }) => {
    const availableTypes = ['thin', 'traditional'];
    const availableSizes = [26, 30, 40];

    return (
        <div className={ style.pizzaBlock }>
            <img className={`${ style.pizzaBlock__image } mb-2`} src={ imageUrl } alt="Pizza" />
            <h4 className={ style.pizzaBlock__title }>{ name }</h4>
            <div className={ style.pizzaBlock__selector }>
                <ul>
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            className={`${ style.active } mb-2`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li
                            key={size}
                            className={ style.active }
                        >
                            {size} sm
                        </li>
                    ))}
                </ul>
            </div>
            <div className={ style.pizzaBlock__bottom }>
                <div className={ style.pizzaPrice }>
                    <span>{ price } &#8372;</span>
                </div>
                <div className={ style.addButton }>
                    <Button border >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pizza;