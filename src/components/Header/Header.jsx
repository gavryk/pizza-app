import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/img/pizza-logo.png';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerWrapper}>
                <div className={style.logo}>
                    <img src={ logo } alt=""/>
                    <h3>React Pizza!</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;