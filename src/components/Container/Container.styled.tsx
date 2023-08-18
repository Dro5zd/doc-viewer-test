import styled from 'styled-components';
import { device } from '../../styles/mixins';

export const MainContainer = styled.div`
  //min-width: 480px;
  //width: 100%;
  min-width: 380px;
  padding: 0 20px;
  margin: 0 auto;

  ${device.tablet} {
    //max-width: 768px;
    //padding: 0 120px;
    padding: 0 40px;
  }

  ${device.desktop} {
    max-width: 1440px;
    padding: 0;
  }
`;
