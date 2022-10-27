import styled from "styled-components";

import { ButtonDark } from "components/shared/buttons/Buttons";
import { Card } from "components/shared/cards/Cards.styled";
import { ContentWrapper } from "components/shared/elements/Elements";

import { media } from "constants/media";

export const CharacterSection = styled.section`
    margin: 200px 0;

    ${ContentWrapper} {
        justify-content: center;

        ${Card} {
            display: flex;
            flex-direction: column;
            font-size: 24px;
            gap: 8px;
            min-height: 200px;
            min-width: 200px;

            ${media.mdUp} {
                font-size: 32px;
                min-height: 400px;
                min-width: 400px;
            }

            p {
                border: 3px solid var(--color-beigeLight);
            }
        }
    }

    ${ButtonDark} {
        margin-top: 24px;

        ${media.mdUp} {
            width: 30%;
        }
    }
`;

export const ErrorPage = styled.section`
    background: var(--color-beigeLight);
    color: var(--color-primaryLight);
    padding: 200px 0;
    text-align: center;

    button {
        margin-top: 40px;

        ${media.mdUp} {
            width: 20%;
        }
    }
`;
