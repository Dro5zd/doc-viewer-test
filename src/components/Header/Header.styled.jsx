import styled from 'styled-components';
import { device } from '../../styles/mixins';

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

  ${device.tablet} {
    padding: 40px 40px;
  }

  ${device.desktop} {
    padding: 40px 80px 80px;
    max-width: 1366px;
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
