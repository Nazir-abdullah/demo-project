import Image from "next/image";
import React from "react";

import { SearchCard } from "./SearchPokemon.styled";

import { getBackground } from "helpers/Methods";

function PokemonData({ name, image, type, ability, moves }) {
    const pokemonName = name.toUpperCase();
    return (
        <SearchCard bgSearch={getBackground}>
            <h1>{pokemonName}</h1>
            <Image src={image} alt={pokemonName} width={200} height={300} />
            <ul>
                <div>
                    <li>Abilities</li>
                    <li>Moves</li>
                    <li>Type</li>
                </div>
                <div>
                    <li>{ability}</li>
                    <li>{moves}</li>
                    <li>{type}</li>
                </div>
            </ul>
        </SearchCard>
    );
}

export default PokemonData;
