import React from 'react';
import {
    LeftSide,
    MainContent, RightSide,
    SubTitle,
    Title,
    TitleAccent,
    TitleWrapper,
} from './Hero.styled';

import {Container} from '../../components/Container/Container';
import {Button} from '../../components/Bottom/Button';
import {Features} from '../../components/Features/Features';

export const Hero = () => {
    return (
        <Container>
            <MainContent>
                <LeftSide>
                    <TitleWrapper>
                        <Title>
                            Упорядкуй документи за допомогою
                            <TitleAccent> штучного інтелекту</TitleAccent>
                        </Title>
                        <SubTitle>
                            Спростіть свою роботу завдяки
                            унікальному та потужному штучному інтелекту
                        </SubTitle>
                    </TitleWrapper>
                    <Button/>
                </LeftSide>
                <RightSide/>
            </MainContent>
            <Features/>
        </Container>
    );
};
