import React, { useState } from 'react';

import {
  BurgerMenu,
  LinkItem,
  BurgerContainer,
  // BurgerIcon,
  // BurgerMenu,
  // LinkItem,
  LinksList, MenuIcon,
  // LoginBtn,
  // NavLink, NavMobile,
  NavWrapper,
  StyledHeader, CrossIcon, StyledLink,
} from './Header.styled';
// import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import menuIcon from '../../assets/icons/menu-icon.svg';
import crossIcon from '../../assets/icons/cross.svg';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const updateMenu = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <StyledHeader>
        <Logo />
        <MenuIcon
          onClick={updateMenu}
          src={menuIcon}
          alt="menu-logo"
          open={checked}
        />
        <BurgerMenu open={checked}>
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
        </BurgerMenu>
      </StyledHeader>
    </Container>
  );
};

export default Header;
