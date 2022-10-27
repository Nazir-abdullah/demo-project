import Image from "next/image";

import { ContentWrapper } from "../elements/Elements";

import { ImageWrapper, NavWrapper } from "./Nav.styled";

import MobileNavigation from "./Navigation/MobileNavigation";

import Navigation from "./Navigation/Navigation";

const Nav = function () {
    return (
        <NavWrapper>
            <ContentWrapper>
                <Navigation />
                <MobileNavigation />
                <ImageWrapper>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsJ_Xa76xOkvnIONoKIXWL_stwF8wehbkgKlG1IxBnsY8MgO39dA3y_8kmCy-xDFVWwc&usqp=CAU"
                        alt=""
                        width={100}
                        height={100}
                    />
                </ImageWrapper>
            </ContentWrapper>
        </NavWrapper>
    );
};

export default Nav;
