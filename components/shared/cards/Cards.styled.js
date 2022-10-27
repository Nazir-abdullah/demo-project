import styled from "styled-components";

import { media } from "constants/media";

export const Card = styled.div`
    background: ${({ bg }) => bg || "var(--color-primaryLight)"};
    border-radius: 16px;
    box-shadow: var(--shadow-default);
    color: var(--color-primary);
    margin-top: 24px;
    padding: 16px;
    text-align: center;

    button {
        margin: 8px 0;
    }

    ${media.mdUp} {
        max-width: 300px;

        :hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }
`;

export const CardTitle = styled.h3`
    font-size: 24px;
    line-height: 24px;
    margin: 16px 24px;
    text-align: center;

    ${media.mdUp} {
        font-size: 32px;
    }
`;
