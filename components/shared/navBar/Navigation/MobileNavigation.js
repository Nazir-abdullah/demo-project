import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

import {
    IconWrapper,
    MobileNavigationWrapper
} from "./MobileNavigation.styled";

import NavLinks from "./NavLinks";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = (
        <AiOutlineMenu onClick={() => setOpen(!open)} size="40px" />
    );

    const closeIcon = (
        <VscChromeClose onClick={() => setOpen(!open)} size="40px" />
    );

    return (
        <MobileNavigationWrapper>
            <IconWrapper>{open ? closeIcon : hamburgerIcon}</IconWrapper>
            {open && <NavLinks />}
        </MobileNavigationWrapper>
    );
};

export default MobileNavigation;
