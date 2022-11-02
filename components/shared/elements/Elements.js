import styled from "styled-components";

import { media } from "constants/media";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 24px;

    ${media.mdUp} {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
    }
`;
