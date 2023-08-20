import styled from 'styled-components';
import mainImg from '../../assets/images/bg-main.jpg';
import {device} from '../../styles/mixins';
import {colors} from '../../styles/colors';
import undline from '../../assets/icons/undline-long.svg';
import undlineShort from '../../assets/icons/undline-short.svg';

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 80px;

  ${device.desktop} {
    margin-top: 0;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 496px;
  margin-bottom: 40px;

  ${device.desktop} {
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 80px;
  }
`;

export const RightSide = styled.div`

  ${device.desktop} {
    display: flex;
    min-width: 0;
    width: 588px;
    height: 600px;
    margin-right: 192px;
    justify-content: end;
    align-items: flex-end;
    background: ${`url(${mainImg})`} no-repeat;
    background-size: cover;

    position: relative;

    &:before {
      content: url(${undlineShort});
      position: absolute;
      bottom: 248px;
      right: 68px;
    }

    &:after {
      content: url(${undline});
      position: absolute;
      bottom: 98px;
      left: -50px;
    }

  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;

  ${device.desktop} {
    width: 400px;
    text-align: left;
    margin-top: 144px;
    margin-bottom: 156px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 16px;
  color: ${colors.primaryText};

  ${device.tablet} {
    font-size: 32px;
    line-height: 38.4px;
  }

  ${device.desktop} {
    text-align: left;
  }
`;
export const TitleAccent = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 38.4px;
  color: ${colors.secondaryText};
  position: relative;

  &:after {
    content: url(${undline});
    position: absolute;
    top: 71px;
    left: -193px;
  }

  ${device.tablet} {
    font-size: 32px;
    line-height: 38.4px;

    &:after {
      content: url(${undline});
      position: absolute;
      top: 16px;
      left: 8px;
    }
  }
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.primarySubTitle};

  ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;
