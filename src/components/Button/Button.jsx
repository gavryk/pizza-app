import React from "react";
import style from './Button.module.scss'

const Button = ({ children, active, ind, ...props }) => {
    return (
        <button
            key={ props.key }
            className={`${ style.btn} ${ props.border && style.borderBtn } ${ active ? style.active : '' }`}
            onClick={ () => props.onClick && props.onClick() }
        >
            { children }
        </button>
    )
}

export default Button;