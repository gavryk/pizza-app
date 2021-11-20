import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/img/pizza-logo.png';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faMoon as farMoon} from "@fortawesome/free-regular-svg-icons";
import {faSun as farSun} from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { useSelector } from "react-redux";

const Header = ({ mode, toggleMode }) => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className={style.header}>
            <div className={`${style.headerWrapper} d-flex justify-content-between align-items-center`}>
                <NavLink to='/' className={`${style.logo} col-6`}>
                    <img src={ logo } alt="Logo"/>
                    <h4>REACT PIZZA</h4>
                </NavLink>

                <div className={`${style.headerButton} col-3 d-flex justify-content-end`}>
                    <Button active={ mode && true }  onClick={ toggleMode } >
                        <FontAwesomeIcon icon={ mode ? farMoon : farSun } />
                    </Button>
                    <NavLink to='/cart' type='button' className={ style.btnCart }>
                        <span className={ style.sum }>{ totalPrice } &#8372;</span>
                        <span className={ style.cart }><FontAwesomeIcon icon={faShoppingCart} />{ totalCount }</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;