import styled from "styled-components";

import { media } from "constants/media";

export const TitleWrapper = styled.div`
    background-color: var(--color-beigeLight);
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    transform: var(--skew-default);
    width: 100%;

    h2 {
        display: block;
        font-size: 16px;
        transform: var(--skew-default-opposite);
    }

    ${media.mdUp} {
        width: 30%;

        h2 {
            font-size: 24px;
        }
    }
`;

export const PokemonSection = styled.section`
    color: var(--color-primary);
    margin-top: 120px;
    text-align: center;

    h3 {
        margin: 8px 0;
    }

    div:first-child {
        flex-direction: column;
        gap: 32px;
        justify-content: space-evenly;

        img {
            width: 100px;
        }

        ${media.mdUp} {
            button {
                margin-right: 8px;
                max-width: 200px;
            }

            img {
                width: 300px;
            }
        }
    }
`;
