import styled from "styled-components";
import {colors} from "../../styles/colors";
import {device} from "../../styles/mixins";

export const ReviewItemWrapper = styled.div`
  height: 390px;
  width: 300px;
  padding: 40px 10px 56px;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  gap: 32px;
  border-radius: 8px;
  border: 3px solid #D9D9D9;

  ${device.tablet} {
    height: 340px;
    width: 600px;
    padding: 40px 40px 56px;
  }
`;

export const ReviewHeader = styled.div`

  ${device.tablet} {
    display: flex;
    align-items: center;
    width: 519px;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin-right: auto;
  margin-bottom: 10px;
  width: 275px;

  ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const AuthorImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;

`;

export const AuthorName = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px
`;

export const ReviewWrapper = styled.div`
`;

export const ReviewText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: right;
`;
