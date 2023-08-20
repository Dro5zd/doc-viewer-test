import React from 'react';
import {Container} from "../../components/Container/Container";
import Slider from "../../components/Slider/Slider";
import {MainReviewContent, ReviewsTitle} from "./Reviews.styled";

export const Reviews = () => {
    return (
        <div>
            <Container>
                <MainReviewContent>
                    <ReviewsTitle>
                        Відгуки клієнтів
                    </ReviewsTitle>
                    <Slider/>
                </MainReviewContent>
            </Container>
        </div>
    );
};
