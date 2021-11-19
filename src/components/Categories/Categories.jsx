import React from "react";
import PropTypes from 'prop-types';
import style from './Categories.module.scss'


const Categories = React.memo(({ activeCategory, catList, onClickCategory }) => {

    const onSelectCat = (index) => {
        onClickCategory(index);
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

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    catList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = { 
    activeCategory: null, 
    catList: []
}


export default Categories;