import styled from "styled-components";

import { media } from "constants/media";

export const Wrapper = styled.header`
    background: var(--color-linear--default);
    color: var(--color-primaryLight);
    padding-top: 100px;
`;
export const Title = styled.h1`
    animation: 1s ease-in-out 0s 1 slideIn;
    display: inline-block;
    font-size: 32px;
    margin: 0 auto;
    padding: 4px;
    position: relative;
    transform: var(--skew-default-opposite);
    z-index: 1;

    ${media.mdUp} {
        font-size: 48px;
    }

    @keyframes slideIn {
        0% {
            transform: translateX(-80%);
        }

        100% {
            transform: translateX(0);
        }
    }
`;

export const TitleWrapper = styled.div`
    background: var(--color-beigeLight);
    border-radius: 15px;
    text-align: center;
    transform: var(--skew-default);
    z-index: 1;

    h1 {
        font-size: 24px;

        ${media.mdUp} {
            font-size: 40px;
        }
    }

    ${media.mdUp} {
        padding: 0 16px;
    }
`;

export const TitleButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    button {
        animation: 1s ease-in-out 0.3s 1 slideIn;
        margin: 48px auto;
        max-width: 200px;

        ${media.mdUp} {
            max-width: 300px;
        }
    }
`;

export const Description = styled.div`
    margin: 24px 0;

    p {
        font-size: 16px;
        line-height: 16px;

        ${media.mdUp} {
            font-size: 24px;
            line-height: 32px;
        }
    }

    ${media.mdUp} {
        display: flex;
        text-align: left;
        width: 30%;
    }
`;
