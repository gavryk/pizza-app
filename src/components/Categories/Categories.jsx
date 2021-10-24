import React, {useState} from "react";
import style from './Categories.module.scss'


const Categories = ({ items, catClickItem }) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectCat = (index) => {
        setActiveItem(index);
    }

    return(
        <ul className='d-flex justify-content-start align-items-center'>
            <li className={`${ style.btn } ${ activeItem === null && style.active }`}
                onClick={ () => onSelectCat(null) }
            >
                All
            </li>
            {
                items && items.map((cat, index) => {
                    return (
                        <li className={`${style.btn} ${ activeItem === index && style.active }`}
                            onClick={ () => onSelectCat(index) }
                            key={`${ cat }_${ index }`}
                        >
                            { cat }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Categories;