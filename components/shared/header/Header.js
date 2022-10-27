import { useState } from "react";

import { ButtonLight } from "../buttons/Buttons";
import { ContentWrapper } from "../elements/Elements";

import { PopUpModal, PopupInfo, TitlePopup } from "../modal/PopUp";

import {
    Description,
    Title,
    TitleButtonWrapper,
    TitleWrapper,
    Wrapper
} from "./Header.styled";

const Header = function () {
    const [modal, setModal] = useState(false);
    const closePopUp = () => setModal(false);

    return (
        <Wrapper>
            <ContentWrapper>
                <TitleButtonWrapper>
                    <TitleWrapper>
                        <Title>NEW DOM APP</Title>
                    </TitleWrapper>
                    <ButtonLight onClick={() => setModal(!modal)}>
                        Click
                    </ButtonLight>
                </TitleButtonWrapper>
                <Description>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis exercitationem necessitatibus corporis.
                        Tempore enim magnam laboriosam eos ratione dolore est
                        sequi optio, iste explicabo perspiciatis! Voluptatum,
                        praesentium! Consequuntur, fugiat perspiciatis.
                    </p>
                </Description>
            </ContentWrapper>
            {modal && (
                <>
                    <PopUpModal>
                        <PopupInfo>
                            <TitlePopup>SORRY.......!</TitlePopup>
                            <p>No information has been provided yet</p>
                            <ButtonLight onClick={closePopUp}>
                                Close
                            </ButtonLight>
                        </PopupInfo>
                    </PopUpModal>
                </>
            )}
        </Wrapper>
    );
};

export default Header;
