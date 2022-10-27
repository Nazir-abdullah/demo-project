import styled from "styled-components";

import { Card } from "components/shared/cards/Cards.styled";

import { media } from "constants/media";

export const SectionWrapper = styled.section`
    margin: 200px 0;

    div {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const TitleWrapper = styled.div`
    background: var(--color-beigeLight);
    border-radius: 15px;
    color: var(--color-primary);
    text-align: center;
    transform: var(--skew-default);

    h1 {
        transform: var(--skew-default-opposite);
    }

    ${media.mdUp} {
        width: 30%;
    }
`;

export const CharactersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: space-between;

    ${Card} {
        background: var(--color-linear--default);
        color: var(--color-primaryLight);
    }

    img {
        border-radius: 50%;
    }

    a {
        color: var(--color-primary);
        text-decoration: none;
    }
`;
