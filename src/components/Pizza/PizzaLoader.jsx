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
            <rect x="58" y="284" rx="0" ry="0" width="218" height="19" /> 
            <rect x="0" y="322" rx="10" ry="10" width="337" height="76" /> 
            <rect x="186" y="415" rx="25" ry="25" width="150" height="45" /> 
            <rect x="5" y="423" rx="0" ry="0" width="120" height="30" />
        </ContentLoader>
    )
}

export default PizzaLoader;