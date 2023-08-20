import logo from '../../assets/icons/paperclip.svg';
import {LogoImg, LogoText, LogoWrapper} from './Logo.styled';

export const Logo = () => {
    const handleHomePageClick = () => {

    };

    return (
        <LogoWrapper onClick={handleHomePageClick}>
            <LogoImg
                src={logo}
                alt="main-logo"
            />
            <LogoText>Document viewer</LogoText>
        </LogoWrapper>
    );
};
