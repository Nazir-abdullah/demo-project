import styled from "styled-components";

import { ContentWrapper } from "components/shared/elements/Elements";

import { media } from "constants/media";

export const LoadPokemon = styled.div`
    color: var(--color-primary);
    margin-top: 100px;
    text-align: center;

    h3 {
        margin: 8px 0;
    }

    ${media.mdUp} {
        ${ContentWrapper} {
            flex-direction: row;
            flex-wrap: wrap-reverse;
            justify-content: space-evenly;
        }
    }
`;
