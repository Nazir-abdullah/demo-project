import styled from "styled-components";
import { media } from "../../constants/media";
import { ContentWrapper } from "../shared/elements/Elements";

export const PeopleSection = styled.section`
    margin: 200px 0;

    ${media.mdUp} {
        ${ContentWrapper} {
            flex-direction: column;
        }
    }
`;
