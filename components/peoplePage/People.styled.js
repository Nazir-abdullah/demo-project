import { ContentWrapper } from "../shared/elements/Elements";
import { media } from "../../constants/media";
import styled from "styled-components";

export const PeopleSection = styled.section`
    margin: 200px 0;

    ${media.mdUp} {
        ${ContentWrapper} {
            flex-direction: column;
        }
    }
`;
