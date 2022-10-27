/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsArrowRight } from "react-icons/bs";
import { FcCallback } from "react-icons/fc";
import { ImMan } from "react-icons/im";
import {
    TiSocialFacebook,
    TiSocialFacebookCircular,
    TiSocialLinkedin,
    TiSocialYoutubeCircular
} from "react-icons/ti";
import Link from "next/link";

import { ContentWrapper } from "../elements/Elements";

import { FooterBar, FooterSection, Social } from "./Footer.styled";

const Footer = function () {
    const currentYear = new Date().getFullYear();

    return (
        <FooterSection>
            <ContentWrapper>
                <div>
                    <ul>
                        <h3>Contacts</h3>
                        <li>
                            <ImMan /> : Get in touch with Uri
                        </li>
                        <li>
                            <FcCallback /> : 070 - 390 33 24
                        </li>
                        <li>
                            <BsArrowRight />
                            <Link href="https://gracious.nl/" passHref>
                                Gracious.nl
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Address</h3>
                        <li>Laan van Waalhaven 460</li>
                        <li>2497 GR Den Haag</li>
                        <li>info@gracious.nl</li>
                    </ul>
                </div>
                <Social>
                    <div>
                        <li>
                            <Link href="" passHref>
                                <a>
                                    <TiSocialYoutubeCircular />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>
                                    <TiSocialFacebookCircular />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>
                                    <TiSocialLinkedin />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <a>
                                    <TiSocialFacebook />
                                </a>
                            </Link>
                        </li>
                    </div>
                </Social>
            </ContentWrapper>
            <FooterBar>
                <ContentWrapper>
                    <p>© {currentYear} Nazir Abdullah</p>
                    <p>n.abdullah@gracious.com</p>
                </ContentWrapper>
            </FooterBar>
        </FooterSection>
    );
};

export default Footer;
