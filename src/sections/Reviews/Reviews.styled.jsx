import styled from "styled-components";
import {device} from "../../styles/mixins";
import {colors} from "../../styles/colors";

export const MainReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${colors.secondaryText};
  overflow: hidden;

  ${device.tablet} {
    padding: 40px;
  }

  ${device.desktop} {
    position: relative;
    padding: 80px 0 80px 80px;
    justify-content: space-between;
  }
`;

export const ReviewsTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 26px;
  color: ${colors.primaryText};
  text-align: center;
  
  ${device.tablet} {
    line-height: 38.4px;
  } 
  
  ${device.desktop} {
    position: absolute;
    top: 80px;
    left: 80px;
    font-size: 40px;
    margin-left: 10px;
    margin-bottom: 16px;
  }
`;
