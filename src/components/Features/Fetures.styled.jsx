import styled from 'styled-components';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondaryText};
  padding: 47px 80px;
  margin-top: 8px;
  
  ${device.desktop} {
    align-items: flex-start;
  }
 
`;

export const FeaturesList = styled.ul`
  display: flex;
  //gap: 20px;
  align-items: center;
  justify-content: center;

  ${device.desktop} {
    gap: 8px;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  width: 295px;
  gap: 8px;
  //gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const FeatureImg = styled.img`
  //width: 63px;

  ${device.desktop} {
    width: 60px;
  }
`;

export const FeatureTitle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.background};

  ${device.desktop} {
    //width: 83px;
  }
`;
