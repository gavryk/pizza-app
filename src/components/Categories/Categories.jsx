import React from "react";
import {Button} from "../index";


const Categories = ({ items }) => {
    return(
        <div className='d-flex justify-content-start align-items-center'>
            <Button active>All</Button>
            {
                items.map(cat => {
                    return (
                        <Button>{ cat }</Button>
                    )
                })
            }
        </div>
    )
}

export default Categories;