import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/img/pizza-logo.png';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${style.headerWrapper} d-flex justify-content-between align-items-center`}>
                <div className={`${style.logo} col-6`}>
                    <img src={ logo } alt="Logo"/>
                    <h4>REACT PIZZA</h4>
                </div>

                <div className={`${style.headerButton} col-2`}>
                    <button>2000</button>
                    <button>Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header;