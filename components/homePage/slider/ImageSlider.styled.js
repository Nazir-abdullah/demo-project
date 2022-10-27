import styled from "styled-components";

import { media } from "constants/media";

export const SliderSection = styled.section`
    margin: 100px 0;
    position: relative;
`;

export const SliderTitleWrapper = styled.div`
    background: var(--color-beigeLight);
    border-radius: 15px;
    display: inline-block;
    margin: 50px 0;
    transform: var(--skew-default);
    width: 60%;

    ${media.mdUp} {
        width: 30%;
    }
`;

export const SliderTitle = styled.h2`
    color: var(--color-primary);
    margin: 0 auto;
    text-align: center;
    transform: var(--skew-default-opposite);

    ${media.mdUp} {
        font-size: 32px;
    }
`;

export const Slider = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;

    img {
        border-radius: 15px;
        box-shadow: var(--shadow-default);
    }

    div:nth-child(2) {
        left: 32px;
    }

    div:nth-child(3) {
        right: 32px;
    }
`;

export const Slide = styled.div`
    opacity: 0;
    transition-duration: all 1s ease-in-out;
`;

export const SlideActive = styled.div`
    opacity: 1;
    transform: scale(3.08);
    transition-duration: all 1s ease-in-out;
`;
