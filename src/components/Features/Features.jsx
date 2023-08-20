import React from 'react';
import {
    FeatureImg,
    FeatureItem, FeaturesList, FeatureTitle,
    Wrapper,
} from './Fetures.styled';
import pen from '../../assets/icons/pen.svg';
import files from '../../assets/icons/files.svg';
import statistic from '../../assets/icons/statistic.svg';
import clock from '../../assets/icons/clock.svg';
import {nanoid} from "nanoid";

export const Features = () => {
    const features = [
        {
            id: nanoid(),
            img: pen,
            title: 'Зменшіть кількість помилок у документах',
        },
        {
            id: nanoid(),
            img: files,
            title: 'Спростіть свої юридичні документи',
        },
        {
            id: nanoid(),
            img: statistic,
            title: 'Користуйтесь зручними графіками й інфографікою',
        },
        {
            id: nanoid(),
            img: clock,
            title: 'Заощаджуйте свій час за допомогою Document viewer',
        },
    ];

    return (
        <Wrapper>
            <FeaturesList>
                {features.map(p => {
                    return (
                        <FeatureItem key={p.id}>
                            <FeatureImg src={p.img} alt=""/>
                            <FeatureTitle>{p.title}</FeatureTitle>
                        </FeatureItem>
                    )
                })}
            </FeaturesList>
        </Wrapper>
    );
};
