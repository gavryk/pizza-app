import React from 'react';
import ContentLoader from "react-content-loader"

const PizzaLoader = () => {
    return (
        <ContentLoader 
            speed={2}
            width={337}
            height={486}
            viewBox="0 0 337 486"
            backgroundColor="#b3adad"
            foregroundColor="#ecebeb"
        >
            <circle cx="164" cy="131" r="131" /> 
            <rect x="30" y="285" rx="0" ry="0" width="269" height="19" /> 
            <rect x="32" y="321" rx="10" ry="10" width="268" height="76" /> 
            <rect x="166" y="416" rx="25" ry="25" width="132" height="45" /> 
            <rect x="32" y="424" rx="0" ry="0" width="84" height="30" />
        </ContentLoader>
    )
}

export default PizzaLoader;