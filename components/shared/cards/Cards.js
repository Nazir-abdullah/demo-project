import Image from "next/image";

import BlueImageOne from "public/images/BlueImage-1.jpeg";

import BlueImageThree from "public/images/BlueImage-3.png";
import BlueImageTow from "public/images/BlueImage-2.jpeg";

import { ButtonDark } from "../buttons/Buttons";
import { getBackground } from "helpers/Methods";

import { ContentWrapper } from "../elements/Elements";

import { Card, CardTitle } from "./Cards.styled";
import { useState } from "react";

const cards = [
    {
        id: 1,
        image: BlueImageOne,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis dolores iste eligendi! Dolor rem perspiciatis reprehenderit! Animi suscipit sed voluptas porro illum maxime! Mollitia autem beatae corrupti eius incidunt",
        title: "Card"
    },
    {
        id: 2,
        image: BlueImageTow,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis dolores iste eligendi! Dolor rem perspiciatis reprehenderit! Animi suscipit sed voluptas porro illum maxime! Mollitia autem beatae corrupti eius incidunt",
        title: "Card"
    },
    {
        id: 3,
        image: BlueImageThree,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis dolores iste eligendi! Dolor rem perspiciatis reprehenderit! Animi suscipit sed voluptas porro illum maxime! Mollitia autem beatae corrupti eius incidunt",
        title: "Card"
    }
];

const Cards = function () {
    const [open, setOpen] = useState(false);

    const printMessage = () => {
        setOpen(!open);
    };
    return (
        <ContentWrapper>
            {cards.map((card, index) => (
                <Card key={index} bg={getBackground}>
                    <CardTitle>{card.title}</CardTitle>
                    <p>{card.text}</p>
                    <Image src={card.image} width={300} height={200} />
                    <ButtonDark>Click</ButtonDark>
                </Card>
            ))}
        </ContentWrapper>
    );
};

export default Cards;
