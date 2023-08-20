import styled from 'styled-components';
import {device} from '../../styles/mixins';

export const MainContainer = styled.div`
  min-width: 380px;
  padding: 0 20px;
  margin: 0 auto;

  ${device.tablet} {
    padding: 0 40px;
  }

  ${device.desktop} {
    max-width: 1366px;
    padding: 0;
  }
`;
