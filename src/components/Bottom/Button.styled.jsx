import styled from 'styled-components';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
  display: flex;
  padding: 16px 62px;
  align-items: center;

  border-radius: 8px;
  border: 3px solid ${colors.secondaryText};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  max-width: 256px;

  &:hover {
    background: ${colors.secondaryText};
    color: ${colors.background};
    cursor: pointer;
  }

  &:active {
    background: ${colors.buttonActive};
    border: 3px solid ${colors.buttonActive};
    color: ${colors.background};
    cursor: pointer;
  }

  ${device.tablet} {

  }

  ${device.desktop} {

  }
`;
