import styled from "styled-components";

import { media } from "constants/media";

export const PopUpModal = styled.div`
    align-items: center;
    animation: 0.3s ease-out;
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 30;

    ${media.mdUp} {
        button {
            margin: 0 auto;
            width: 20%;
        }
    }
`;

export const PopupInfo = styled.div`
    align-items: center;
    animation: 0.4s ease-out moveInTop;
    background: var(--color-beigeLight);
    border: solid 7px var(--color-primary);
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    min-width: 220px;
    padding: 20px;
    width: auto;

    @keyframes moveInTop {
        0% {
            opacity: 0;
            transform: translateY(-10rem);
        }

        100% {
            opacity: 1;
            transform: translateY(0.5rem);
        }
    }

    ${media.mdUp} {
        width: 700px;
    }
`;

export const TitlePopup = styled.div`
    font-size: 24;
    line-height: 24px;

    ${media.mdUp} {
        font-size: 40px;
        line-height: 32px;
    }
`;
