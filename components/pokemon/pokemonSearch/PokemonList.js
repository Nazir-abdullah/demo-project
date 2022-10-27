import React, { useState } from "react";

import { ContentWrapper } from "components/shared/elements/Elements";

import PokemonData from "./PokemonData";

import { fetchPokemon } from "./getPokemon";

import SearchPokemon from "./SearchPokemon";

function PokemonList() {
    const [pokemon, setPokemon] = useState("");
    const [loading, setLoading] = useState(false);

    const getPokemon = async query => {
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
    };

    return (
        <>
            <ContentWrapper>
                <SearchPokemon getPokemon={getPokemon} />
            </ContentWrapper>
            <ContentWrapper>
                {!loading && pokemon ? (
                    <PokemonData
                        id={pokemon.id}
                        image={pokemon.sprites.other.dream_world.front_default}
                        name={pokemon.name}
                        type={pokemon.types[0].type.name}
                        moves={pokemon.moves[0].move.name}
                        ability={pokemon.abilities[0].ability.name}
                    />
                ) : null}
            </ContentWrapper>
        </>
    );
}

export default PokemonList;
