import styled from 'styled-components';
import {device} from '../../styles/mixins';
import {colors} from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.secondaryText};
  padding: 30px;
  margin-top: 8px;


  ${device.desktop} {
    padding: 47px 80px;
    align-items: flex-start;
  }

`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  ${device.desktop} {
    gap: 8px;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 295px;
  gap: 8px;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    flex-direction: row;
  }
`;

export const FeatureImg = styled.img`
  width: 80px;

  ${device.desktop} {
    width: 60px;
  }
`;

export const FeatureTitle = styled.span`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: ${colors.background};

  ${device.tablet} {
    text-align: start;
  }
`;
