import styled, {css} from "styled-components";
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {colors} from "../../styles/colors";

const filledStarStyles = css`
  & path {
    fill: ${colors.secondaryText};
  }
`;

const halfFilledStarStyles = css`

  & path {
    fill: url(#half_grad);
  }
`;

export const StyledStar = styled(StarIcon)`
  ${(props) => (props.filled === 'true' ? filledStarStyles : "")}
  ${(props) => (props.halffilled === 'true' ? halfFilledStarStyles : "")}
`;
