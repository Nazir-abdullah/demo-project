import styled from "styled-components";

import { media } from "constants/media";

export const TodoSection = styled.section`
    margin-top: 100px;

    ${media.mdUp} {
        margin-top: 150px;
    }
`;

export const TodosWrapper = styled.div`
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0 auto;
    min-height: 400px;
    padding: 16px;
    text-align: center;

    ${media.mdUp} {
        min-width: 400px;
    }
`;

export const TodosTitle = styled.div`
    background: var(--color-beigeLight);
    border-radius: 15px;
    text-align: center;
    transform: var(--skew-default);

    h1 {
        transform: var(--skew-default-opposite);
    }
`;
