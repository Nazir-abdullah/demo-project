import styled from "styled-components";

import { media } from "constants/media";

export const PokemonFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0;

    input {
        border-radius: 15px;
        border-style: hidden;
        box-shadow: var(--shadow-default-secondary);
        padding: 8px;
        text-align: center;
    }

    ${media.mdUp} {
        margin: 0;
        min-width: 400px;

        input {
            min-width: 300px;

            &:hover {
                border: 1px solid var(--color-primary);
                transition: all 0.1s ease-in-out;
            }
        }
    }

    button {
        background: var(--color-linear--secondary);
        border-radius: 0;
    }
`;

export const SearchCard = styled.div`
    background: ${({ bgSearch }) => bgSearch || "var(--color-primaryLight)"};
    border-radius: 16px;
    box-shadow: var(--shadow-default);
    margin: 32px auto;

    span {
        font-size: 300px;
    }

    ${media.mdUp} {
        min-height: 200px;
        min-width: 300px;

        :hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }

    ul {
        border-top: 3px solid var(--color-primaryLight);
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 8px;
        text-align: left;

        li {
            background: var(--color-primaryLight);
            border-radius: 5px;
            box-shadow: var(--shadow-default);
            color: var(--color-primary);
            margin: 2px;
            padding: 2px;
            text-align: center;
        }
    }
`;
