import styled from "styled-components";

import { media } from "constants/media";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 24px;

    ${media.mdUp} {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
    }
`;

export const Arrow = styled.div`
    color: var(--color-primary);
    cursor: pointer;
    font-size: 48px;
    position: absolute;
    top: 110%;
    user-select: none;

    ${media.mdUp} {
        top: 70%;

        :hover {
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
        }
    }
`;
