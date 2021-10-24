import React from "react";
import style from './Button.module.scss'

const Button = ({ children, active, ...props }) => {
    return (
        <button
            key={ props.key }
            className={`${ active && style.active } ${ style.btn  }`}
        >
            { children }
        </button>
    )
}

export default Button;