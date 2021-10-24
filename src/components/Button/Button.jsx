import React from "react";
import style from './Button.module.scss'

const Button = ({ children, active, setActive }) => {
    return (
        <button
            className={`${ active && style.active } ${ style.btn  }`}
        >
            { children }
        </button>
    )
}

export default Button;