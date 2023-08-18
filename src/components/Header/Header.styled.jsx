import styled from 'styled-components';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';
import img from '../../assets/images/burger-bg.jpg';
import undline from '../../assets/icons/undline-short.svg';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 380px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  padding: 20px 20px;
  margin: 0 auto;
  //background-color: aqua;

  ${device.tablet} {
    padding: 40px 40px;
  }

  ${device.desktop} {
    padding: 40px 80px 80px;
    max-width: 1440px;
  }
`;

export const MenuIcon = styled.img`
  position: relative;
  height: 24px;
  width: 24px;
  transform: ${(props) => props.open && 'rotate(-90deg)'};
  z-index: 10;
  cursor: pointer;
`;

export const CrossIcon = styled.img`
  position: relative;
  height: 24px;
  width: 24px;
  transform: ${(props) => props.open && 'rotate(-90deg)'};
  //z-index: 10;
  cursor: pointer;
`;

export const BurgerMenu = styled.div`
  // display: ${(props) => (props.open ? 'block' : 'none')};
  box-shadow: ${(props) => (props.open ? '0 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 184px;
  height: 600px;
  overflow: hidden;
  background-image: url(${img});
  background-size: cover;
  //border-left: 8px solid white;
  transition: all 400ms var(--timing-function);
  transform: translate(0) scale (1);
  z-index: 3;

  &.is-hidden {
    transform: translate(50%, -60%);
    scale: 0;
    opacity: 0;
  }
`;

export const NavWrapper = styled.nav`
  margin-bottom: 88px;
  // display: ${(props) => (props.open ? 'block' : 'none')};
  // ${device.tablet} {
  //   display: flex;
  //   align-items: center;
  //   gap: 56px;
  // }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${device.tablet} {
    gap: 16px;
    //flex-direction: row;
    //align-items: center;
  }
`;

export const LinkItem = styled.li`
  //background: rgba(255, 255, 255, 0.1);
  // border: 1px solid ${colors.primaryTitle};
  //border-radius: 32px;
  color: ${colors.primaryText};
  //padding: 8px 16px;
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

  ${device.desktop} {
    // color: ${colors.navLinks};
    // border: 1px solid rgba(255, 255, 255, 0.3);

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
  }
`;

export const StyledLink = styled.a`

  &.active {
    font-weight: bold;
    padding: 20px 0;
    border-bottom: red solid 3px;
  }
  
  ${device.wide} {
    //font-size: 12px;
    //font-weight: 700;
  }
`;

export const BurgerContainer = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  margin-top: 104px;
  //display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    margin-top: 135px;
  }
`;
