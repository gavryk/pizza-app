import React, {useState} from "react";
import style from './Sort.module.scss';

const Sort = () => {
    const [sortBy, setSortBy] = useState('Popular');
    const [toggleSort, setToggleSort] = useState(false);
    let sortList = ['Popular', 'Price', 'Alphabet'];

    const openSortList = () => {
        setToggleSort(!toggleSort);
    }
    const selectSort = (el) => {
        setSortBy(el.target.innerText);
        setToggleSort(!toggleSort);
    }

    return (
        <div className={ style.dropdown }>
            <div className="sort__label">
                <span onClick={ openSortList } className="btn dropdown-header" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <b className='mx-2'>Sort By:</b>
                    { sortBy }
                </span>
            </div>
            <ul id='sort-dropdown-menu'
                className={`${style.dropdownMenu} ${ toggleSort && style.visibleSortList } `}
                aria-labelledby="dropdownMenuLink">
                {
                    sortList.map(function(el) {
                        return(
                            <li onClick={ selectSort } className="dropdown-item">
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