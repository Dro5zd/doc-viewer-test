import styled from 'styled-components';
import mainImg from '../../assets/images/bg-main.jpg';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';
import undline from '../../assets/icons/undline-long.svg';
import undlineShort from '../../assets/icons/undline-short.svg';

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  //margin-bottom: 120px;
  //margin-top: 80px;
  
  ${device.tablet} {
    //margin-top: 182px;
  }
  ${device.desktop} {
    margin-top: 0;
    justify-content: space-between;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 496px;
  //gap: 32px;
  //margin-top: 182px;

  ${device.desktop} {
    //margin-left: 120px;
    align-items: flex-start;
    justify-content: flex-start;
    //margin-top: 60px;
    margin-left: 80px;
    margin-bottom: auto;
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
    
    //padding: 20px;
    //height: calc(100vh - 200px);
    //justify-content: center;
  }
  ${device.limited} {
    //padding-left: 20vw;
  }
  ${device.wide} {
    //margin: auto 0 auto 118px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
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
    top: 16px;
    left: 8px;
  }

${device.tablet} {
  font-size: 32px;
  line-height: 38.4px;
}
`;

export const SubTitle = styled.p`
  //width: 496px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.primarySubTitle};
 

  

  ${device.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;
