import Link from "next/link";

import { List } from "./NavLinks.styled";

export const navLinks = [
    { name: "Home", path: "/" },
    {
        name: "Todo-App",
        path: "/todo"
    },
    {
        name: "Pokemon",
        path: "/pokemon"
    },
    {
        name: "Rick&Morty",
        path: "/rickMorty"
    },
    {
        name: "People",
        path: "/people"
    }
];

const NavLinks = function () {
    return (
        <List>
            {navLinks.map((link, index) => {
                return (
                    <Link key={link.path} href={link.path} passHref>
                        <li key={index}>{link.name}</li>
                    </Link>
                );
            })}
        </List>
    );
};

export default NavLinks;
