import React, {useState} from 'react';

import {
    MenuIcon,
    StyledHeader,
} from './Header.styled';
import {Container} from '../Container/Container';
import {Logo} from '../Logo/Logo';
import menuIcon from '../../assets/icons/menu-icon.svg';
import {BurgerMenu} from '../BurgerMenu/BurgerMenu';

const Header = () => {
    const [checked, setChecked] = useState(false);
    const updateMenu = () => {
        setChecked(!checked);
    };

    return (
        <Container>
            <StyledHeader>
                <Logo/>
                <MenuIcon
                    onClick={updateMenu}
                    src={menuIcon}
                    alt="menu-logo"
                    open={checked}
                />
                <BurgerMenu checked={checked} updateMenu={updateMenu}/>
            </StyledHeader>
        </Container>
    );
};

export default Header;
