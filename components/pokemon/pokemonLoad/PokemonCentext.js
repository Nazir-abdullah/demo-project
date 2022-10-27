import { useEffect, useState } from "react";

import { ButtonLight } from "components/shared/buttons/Buttons";
import { ContentWrapper } from "components/shared/elements/Elements";

import { LoadPokemon } from "./Pokemon.styled";

import PokemonThumb from "./PokemonThumb";

import { pokemonUrl } from "helpers/constants";

const PokemonApp = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(pokemonUrl + "?limit=10");

    const getAllPokemons = async () => {
        const res = await fetch(loadMore);
        const data = await res.json();

        setLoadMore(data.next);

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(pokemonUrl + `/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons(currentList => [...currentList, data]);
                allPokemons.sort((a, b) => a.id - b.id);
            });
        }
        createPokemonObject(data.results);
    };

    useEffect(() => {
        getAllPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LoadPokemon>
            <ContentWrapper>
                <ButtonLight onClick={() => getAllPokemons()}>
                    Show more
                </ButtonLight>
            </ContentWrapper>
            <ContentWrapper>
                {allPokemons.map((pokemonStats, index) => (
                    <PokemonThumb
                        key={index}
                        id={pokemonStats.id}
                        image={
                            pokemonStats.sprites.other.dream_world.front_default
                        }
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                        moves={pokemonStats.moves[0].move.name}
                        ability={pokemonStats.abilities[0].ability.name}
                    />
                ))}
            </ContentWrapper>
        </LoadPokemon>
    );
};

export default PokemonApp;
