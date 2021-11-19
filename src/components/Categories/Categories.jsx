import React from "react";
import PropTypes from 'prop-types';
import style from './Categories.module.scss'


const Categories = React.memo(({ activeCategory, catList, onClickCategory }) => {
    
    return(
        <ul className='d-flex justify-content-start align-items-center'>
            <li className={`${ style.btn } ${ activeCategory === null && style.active }`}
                onClick={ () => onClickCategory(null) }
            >
                All
            </li>
            {
                catList && catList.map((cat, index) => {
                    return (
                        <li className={`${style.btn} ${ activeCategory === index && style.active }`}
                            onClick={ () => onClickCategory(index) }
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
    activeCategory: PropTypes.number,
    catList: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = { 
    activeCategory: null, 
    catList: []
}


export default Categories;