import styled from "styled-components";

import { media } from "constants/media";

export const Form = styled.form`
    border-radius: 5px;
`;

export const ButtonUpdate = styled.button`
    background: var(--color-linear--secondary);
`;

export const InputButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        border-radius: 5px;
        padding: 8px;
        width: 100%;
    }

    button {
        border-radius: 5px;
        font-size: 16px;
        padding: 4px;
        width: 50%;

        ${media.mdUp} {
            width: 30%;
        }
    }
`;
