import styled from "styled-components";

import { media } from "constants/media";

export const FooterSection = styled.footer`
    box-shadow: var(--shadow-default);
    color: var(--color-primary);
    padding-top: 32px;
    position: relative;

    ${media.mdUp} {
        flex-direction: row;
        justify-content: space-between;
    }

    ul {
        list-style: none;
    }

    li {
        margin-top: 10px;
    }
`;

export const Social = styled.div`
    background: var(--color-linear--default);
    border-radius: 15px;
    box-shadow: var(--shedow-default);
    list-style: none;
    margin-top: 30px;
    padding: 40px;

    div {
        background: var(--color-primaryLight);
        border-radius: 15px;
        display: flex;
        justify-content: space-between;

        li {
            cursor: pointer;
            font-size: 32px;
        }
    }

    ${media.mdUp} {
        margin-top: 0;

        div {
            margin: 40px;
        }

        li {
            font-size: 56px;
        }
    }
`;

export const FooterBar = styled.div`
    background: var(--color-beigeLight);
    bottom: 0;
    box-shadow: var(--shadow-default);
    font-size: 16px;
    margin-top: 32px;
    padding: 32px 0;
    position: static;
    text-align: center;

    ${media.mdUp} {
        font-size: 24px;
    }
`;
