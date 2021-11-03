import React, {useEffect, useRef, useState} from "react";
import style from './Sort.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const Sort = ({ sortList }) => {
    const [visibleSort, setVisibleSort] = useState(false);
    const [ activeItem, setActiveItem ] = useState(0);
    let activeLabel = sortList[activeItem];
    const sortRef = useRef();

    const toggleVisibleList = () => {
        setVisibleSort(!visibleSort);
    }

    const selectSort = (index, el) => {
        setActiveItem(index);
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
                            <li key={`${el}_${index}`}
                                onClick={ () => selectSort(index, el) }
                                className={`dropdown-item ${ activeItem === index && style.active }`}>
                                { el }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sort;