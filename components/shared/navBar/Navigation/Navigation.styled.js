import styled from "styled-components";

import { media } from "constants/media";

export const NavigationWrapper = styled.div`
    display: none;

    ${media.mdUp} {
        display: flex;

        li {
            margin: 10px;

            &:hover {
                border-bottom: var(--color-beigeLight) 4px solid;
                color: var(--color-beigeLight);
                transition: all 0.3s ease-in-out;
            }
        }
    }
`;
