import React from 'react';
import {StyledStar} from "./StarRating.styled";

const StarRating = ({value}) => {

    return (
        <>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="half_grad">
                        <stop offset="50%" stopColor="#33cd39"/>
                        <stop offset="50%" stopColor="#D9D9D9" stopOpacity="1"/>
                    </linearGradient>
                </defs>
            </svg>
            {[0, 1, 2, 3, 4].map((index) => (
                <StyledStar
                    key={index}
                    filled={(index < Math.floor(value) || (index === Math.floor(value) && value % 1 >= 0.5)).toString()}
                    halffilled={(index === Math.floor(value) && value % 1 >= 0.5).toString()}
                />
            ))}
        </>
    );
};

export default StarRating;
