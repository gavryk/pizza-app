import React, {useEffect, useRef, useState} from "react";
import style from './Sort.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Sort = React.memo(({ sortList, sortBy, onClickSortBy }) => {
    const [visibleSort, setVisibleSort] = useState(false);
    let activeLabel = sortList.find(obj => obj.type === sortBy).name;
    const sortRef = useRef();

    const toggleVisibleList = () => {
        setVisibleSort(!visibleSort);
    }

    const selectSort = (type) => {
        onClickSortBy(type);
        setVisibleSort(false);
    }

    const clickOffSortPopup = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleSort(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', clickOffSortPopup);
    }, []);

    return (
        <div ref={ sortRef } className={ style.dropdown }>
            <div className={ style.sortLabel }>
                <span onClick={ toggleVisibleList } className="btn dropdown-header" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                    <b className={`mx-2 ${ visibleSort ? style.caretActive : '' }`}><FontAwesomeIcon icon={faCaretDown} />Sort By:</b>
                    <span className={ style.selectSort }>{ activeLabel }</span>
                </span>
            </div>
            <ul id='sort-dropdown-menu'
                className={`${style.dropdownMenu} ${ visibleSort && style.visibleSortList } `}
                aria-labelledby="dropdownMenuLink">
                {   sortList &&
                sortList.map(function(el, index) {
                    return(
                        <li key={`${el.type}_${index}`}
                            onClick={ () => selectSort(el) }
                            className={`dropdown-item ${ sortBy === el && style.active }`}>
                            { el.name }
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
})

Sort.propTypes = {
    sortBy: PropTypes.string,
    sortList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSortBy: PropTypes.func.isRequired
}

Sort.defaultProps = { 
    sortList: []
}

export default Sort;