import React from "react";
import style from './Categories.module.scss'


const Categories = React.memo(({ activeCategory, catList, onClickItem }) => {

    const onSelectCat = (index) => {
        onClickItem(index);
    };

    return(
        <ul className='d-flex justify-content-start align-items-center'>
            <li className={`${ style.btn } ${ activeCategory === null && style.active }`}
                onClick={ () => onSelectCat(null) }
            >
                All
            </li>
            {
                catList && catList.map((cat, index) => {
                    return (
                        <li className={`${style.btn} ${ activeCategory === index && style.active }`}
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
});

export default Categories;