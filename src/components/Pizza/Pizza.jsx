import React from "react";
import style from './Pizza.module.scss'

const Pizza = ({ imgUrl, name }) => {
    const availableTypes = ['thin', 'traditional'];
    const availableSizes = [26, 30, 40];

    return (
        <div className={ style.pizzaBlock }>
            <img className={`${ style.pizzaBlockImage } mb-2`} src={ imgUrl } alt="Pizza" />
            <h4 className={ style.pizzaBlockTitle }>{ name }</h4>
            <div className={ style.pizzaBlockSelector }>
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
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">

                </div>
            </div>
        </div>
    )
}

export default Pizza;