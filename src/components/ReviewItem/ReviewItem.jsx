import React from 'react';

import StarRating from "../StarRating/StarRating";
import {
    AuthorImg, AuthorName,
    AuthorWrapper,
    ReviewHeader,
    ReviewItemWrapper, ReviewText, ReviewWrapper
} from "./ReviewItem.styled";

export const ReviewItem = ({
                               review,
                               img,
                               name,
                               rating
                           }) => {

    const formattedReview = (
        <span>{review.split('\n')
            .map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br/>
                </React.Fragment>
            ))}</span>
    );

    return (
        <ReviewItemWrapper>
            <ReviewHeader>
                <AuthorWrapper>
                    <AuthorImg src={img}
                               alt=""/>
                    <AuthorName>{name}</AuthorName>
                </AuthorWrapper>
                <StarRating value={rating}/>
            </ReviewHeader>
            <ReviewWrapper>
                <ReviewText>{formattedReview}</ReviewText>
            </ReviewWrapper>
        </ReviewItemWrapper>
    );
};
