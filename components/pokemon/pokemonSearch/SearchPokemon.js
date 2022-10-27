import { useState } from "react";

import { ButtonLight } from "components/shared/buttons/Buttons";
import { ContentWrapper } from "components/shared/elements/Elements";

import { PokemonFormWrapper } from "./SearchPokemon.styled";

function SearchPokemon({ getPokemon }) {
    const [search, setSearch] = useState("");

    return (
        <PokemonFormWrapper>
            <ContentWrapper>
                <p>Show your favorite one by typing its name</p>
                <input
                    type="text"
                    placeholder="search pokemon"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                    }}
                />
                <ButtonLight
                    onClick={() => {
                        if (search.length > 0) {
                            getPokemon(search);
                            setSearch("");
                        } else {
                            getPokemon("ditto");
                        }
                    }}
                >
                    Search
                </ButtonLight>
            </ContentWrapper>
        </PokemonFormWrapper>
    );
}

export default SearchPokemon;
