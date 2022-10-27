import styled from "styled-components";

import { media } from "constants/media";

export const ButtonLight = styled.button`
    background: var(--color-primaryLight);
    border-radius: 40px;
    border-style: hidden;
    box-shadow: var(--shadow-default);
    color: var(--color-primary);
    cursor: pointer;
    font-family: inherit;
    font-size: 24px;
    line-height: 32px;
    width: 100%;

    ${media.mdUp} {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const ButtonDark = styled.button`
    background: var(--color-primary);
    border-radius: 40px;
    border-style: hidden;
    box-shadow: var(--shadow-default);
    color: var(--color-primaryLight);
    cursor: pointer;
    font-family: inherit;
    font-size: 24px;
    line-height: 32px;
    width: 100%;

    ${media.mdUp} {
        font-size: 32px;
        line-height: 40px;
    }
`;
