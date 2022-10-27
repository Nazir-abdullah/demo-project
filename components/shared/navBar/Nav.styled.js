import styled from "styled-components";

import { media } from "constants/media";

export const NavWrapper = styled.div`
    background: var(--color-primaryLight);
    box-shadow: var(--shadow-default);
    display: flex;
    flex-direction: row;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    div:nth-child(1) {
        flex-direction: row;
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    animation: 1s ease-in-out 0s 1 slideInImage;
    height: 50px;
    margin-left: auto;
    padding-top: 8px;
    width: 50px;

    ${media.mdUp} {
        height: 100px;
        width: 100px;

        @keyframes slideInImage {
            0% {
                transform: translateX(-40%);
            }

            100% {
                transform: translateX(10%);
            }
        }
    }
`;
