import React from 'react';

import crossIcon from '../../assets/icons/cross.svg';
import {
    BurgerContainer,
    BurgerMenuW, CrossIcon, LinkItem,
    LinksList,
    NavWrapper, StyledLink,
} from './BurgerMenu.styled';

export const BurgerMenu = ({
                               checked,
                               updateMenu
                           }) => {
    return (
        <BurgerMenuW open={checked}>
            <BurgerContainer open={checked}>
                <NavWrapper>
                    <LinksList>
                        <LinkItem>
                            <StyledLink to="./">Головна</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="./">Про нас</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="./">Тарифи</StyledLink>
                        </LinkItem>
                        <LinkItem>
                            <StyledLink to="./">Увійти</StyledLink>
                        </LinkItem>
                    </LinksList>
                </NavWrapper>
                <CrossIcon
                    onClick={updateMenu}
                    src={crossIcon}
                    alt="cross-icon"
                    open={checked}
                />
            </BurgerContainer>
        </BurgerMenuW>
    );
};
