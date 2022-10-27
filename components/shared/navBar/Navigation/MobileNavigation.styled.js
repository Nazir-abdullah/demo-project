import styled from "styled-components";

import { media } from "constants/media";

export const MobileNavigationWrapper = styled.div`
    color: var(--color-primary);
    padding: 8px;

    div:nth-child(2) {
        align-items: center;
        background: var(--color-primaryLight);
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 55px;
        transition: 1s ease-in-out slideInNav;
        width: 100%;
    }

    ${media.mdUp} {
        display: none;
    }

    @keyframes slideInNav {
        0% {
            transform: translateX(-40%);
        }

        100% {
            transform: translateX(10%);
        }
    }
`;

export const IconWrapper = styled.div`
    color: var(--color-primary);
    cursor: pointer;
    display: inline-block;
`;
