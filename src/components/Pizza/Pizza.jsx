import React, {useState} from "react";
import style from './Pizza.module.scss'
import Button from "../Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Pizza = ({ imageUrl, name, price, ...props }) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const availableTypes = ['thin', 'traditional'];
    const availableSizes = [26, 30, 40];

    const onSelectType = (ind) => {
        setActiveType(ind);
    }
    const onSelectSize = (ind) => {
        setActiveSize(ind);
    }

    return (
        <div className={ style.pizzaBlock }>
            <img className={`${ style.pizzaBlock__image } mb-2`} src={ imageUrl } alt="Pizza" />
            <h4 className={ style.pizzaBlock__title }>{ name }</h4>
            <div className={ style.pizzaBlock__selector }>
                <ul>
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            className={`${ activeType === index ? style.active : '' } mb-2`}
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
                            className={ activeSize === index ? style.active : '' }
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
                    <Button border >
                        <FontAwesomeIcon icon={faPlus} />
                        Add
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pizza;