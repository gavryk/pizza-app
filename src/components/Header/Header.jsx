import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/img/pizza-logo.png';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    let totalCount = 2;
    let totalSum = 250;

    return (
        <div className={style.header}>
            <div className={`${style.headerWrapper} d-flex justify-content-between align-items-center`}>
                <NavLink to='/' className={`${style.logo} col-6`}>
                    <img src={ logo } alt="Logo"/>
                    <h4>REACT PIZZA</h4>
                </NavLink>

                <div className={`${style.headerButton} col-2 d-flex justify-content-end`}>
                    <NavLink to='/cart' type='button' className={ style.btnCart }>
                        <span className={ style.sum }>{ totalSum } &#8372;</span>
                        <span className={ style.cart }><FontAwesomeIcon icon={faShoppingCart} />{ totalCount }</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;