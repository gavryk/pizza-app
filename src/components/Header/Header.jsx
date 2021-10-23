import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/img/pizza-logo.png';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${style.headerWrapper} d-flex justify-content-between align-items-center`}>
                <NavLink to='/' className={`${style.logo} col-6`}>
                    <img src={ logo } alt="Logo"/>
                    <h4>REACT PIZZA</h4>
                </NavLink>

                <div className={`${style.headerButton} col-2 d-flex justify-content-end`}>
                    <button type='button' className='btn'>
                        <span>2000</span>
                        <span>Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;