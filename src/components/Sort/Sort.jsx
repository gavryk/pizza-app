import React, {useEffect, useRef, useState} from "react";
import style from './Sort.module.scss';

const Sort = () => {
    const [sortBy, setSortBy] = useState('Popular');
    const [toggleSort, setToggleSort] = useState(false);
    const sortRef = useRef();
    let sortList = ['Popular', 'Price', 'Alphabet'];

    const toggleVisibleList = () => {
        setToggleSort(!toggleSort);
    }

    const selectSort = (el) => {
        setSortBy(el.target.innerText);
        // setToggleSort(!toggleSort);
    }

    const clickOffSortPopup = (e) => {
        console.log(sortRef.current);
    }

    useEffect(() => {
        document.body.addEventListener('click', clickOffSortPopup);
    }, []);

    return (
        <div ref={ sortRef } className={ style.dropdown }>
            <div className="sort__label">
                <span onClick={ toggleVisibleList } className="btn dropdown-header" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <b className='mx-2'>Sort By:</b>
                    <span className={ style.selectSort }>{ sortBy }</span>
                </span>
            </div>
            <ul id='sort-dropdown-menu'
                className={`${style.dropdownMenu} ${ toggleSort && style.visibleSortList } `}
                aria-labelledby="dropdownMenuLink">
                {
                    sortList.map(function(el, index) {
                        return(
                            <li key={`${el}_${index}`} onClick={ selectSort } className="dropdown-item">
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