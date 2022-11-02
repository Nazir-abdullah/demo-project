import styled from "styled-components";

import { media } from "constants/media";
import Image from "next/image";

export const SliderSection = styled.section`
    margin: 100px 0;
    position: relative;
`;

export const SliderTitle = styled.div`
    background: var(--color-beigeLight);
    border-radius: 15px;
    display: inline-block;
    margin: 50px auto;
    transform: var(--skew-default);
    width: 60%;

    ${media.mdUp} {
        width: 30%;
    }

    h2 {
        color: var(--color-primary);
        text-align: center;
        transform: var(--skew-default-opposite);

        ${media.mdUp} {
            font-size: 32px;
        }
    }
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: column;

    div:first-child {
        bottom: 0;
        left: 0;
    }

    div:last-child {
        bottom: 0;
        right: 0;
    }

    ${media.mdUp} {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

export const Arrow = styled.div`
    color: var(--color-primary);
    cursor: pointer;
    font-size: 50px;
    position: absolute;

    ${media.mdUp} {
        font-size: 80px;
        position: relative;

        :hover {
            transform: scale(1.3);
            transition: all 0.2s ease-in-out;
        }
    }
`;

export const ImagesWrapper = styled.div`
    box-shadow: var(--shadow-default-secondary);
    height: 80px;

    img {
        border-radius: 15px;
    }

    ${media.mdUp} {
        height: 280px;
    }
`;
export const DotsWrapper = styled.span`
    display: flex;
    flex-direction: row;
    margin: 40px auto;

    ${media.mdUp} {
        margin: 32px auto;
    }
`;

export const Dot = styled.div`
    color: ${({ active }) => (active ? "var(--color-primary)" : "gray")};
    font-size: 32px;
`;
