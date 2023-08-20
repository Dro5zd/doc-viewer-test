import styled from 'styled-components';
import img from '../../assets/images/burger-bg.jpg';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';
import undline from '../../assets/icons/undline-short.svg';

export const BurgerMenuW = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  box-shadow: ${(props) => (props.open ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
  background-image: ${(props) => (props.open ? `url(${img})` : 'none')};
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  transition: all 400ms var(--timing-function);
  transform: translate(0) scale (1);
  z-index: 3;

  &.is-hidden {
    transform: translate(50%, -60%);
    scale: 0;
    opacity: 0;
  }

  ${device.desktop} {
    display: block;
    background-image: url(${img});
    width: 184px;
    height: 600px;
  }
`;

export const NavWrapper = styled.nav`
  margin-bottom: 88px;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${device.tablet} {
    gap: 16px;
  }
`;

export const LinkItem = styled.li`
  color: ${colors.primaryText};
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  
  &:last-child{
    margin-top: 46px;
  }

  :hover {
    &:after {
      content: url(${undline});
      position: absolute;
      top: 12px;
      left: 4px
    }
    color: ${colors.primaryText};
    cursor: pointer;
  }
`;

export const StyledLink = styled.a`

  &.active {
    font-weight: bold;
    padding: 20px 0;
  }
  
`;

export const BurgerContainer = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  margin-top: 104px;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    margin-top: 135px;
  }
`;

export const CrossIcon = styled.img`
  position: relative;
  height: 24px;
  width: 24px;
  transform: ${(props) => props.open && 'rotate(-90deg)'};
  cursor: pointer;
`;
