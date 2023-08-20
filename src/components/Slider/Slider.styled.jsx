import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {device} from "../../styles/mixins";
import {colors} from "../../styles/colors";

export const StyledHeroSwiper = styled(Swiper)`

  .swiper-pagination-bullet {
    background: ${colors.secondaryText};
    opacity: 1;
    border: #D9D9D9 3px solid;
    margin: 0 8px;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.secondaryText};
    border: ${colors.secondaryText} 3px solid;
  }

  ${device.desktop} {
    display: flex;
    flex-direction: row;
    user-select: none;
    padding-top: 84px;

    .swiper-pagination {
      top: 12px;
      left: 500px;
      height: fit-content;
    }

    .swiper-pagination-bullet-active {
      background: ${colors.background};
      border: ${colors.background} 3px solid;
    }
  }
}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;












