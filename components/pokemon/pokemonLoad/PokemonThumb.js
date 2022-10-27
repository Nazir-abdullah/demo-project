import Image from "next/image";

import { Card } from "components/shared/cards/Cards.styled";
import { ContentWrapper } from "components/shared/elements/Elements";

import { getBackground } from "helpers/Methods";

const PokemonThumb = ({ image, name, type, moves, ability }) => {
    const pokemonName = name.toUpperCase();
    return (
        <ContentWrapper>
            <div>
                <Card bg={getBackground(type)}>
                    <Image src={image} alt={name} height={100} width={100} />
                    <div>
                        <h3>{pokemonName}</h3>
                        <p>Type: {type}</p>
                        <p>Moves: {moves}</p>
                        <p>Ability: {ability}</p>
                    </div>
                </Card>
            </div>
        </ContentWrapper>
    );
};

export default PokemonThumb;
