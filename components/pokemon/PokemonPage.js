import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { ButtonDark, ButtonLight } from "components/shared/buttons/Buttons";
import { ContentWrapper } from "components/shared/elements/Elements";

import pikachu from "../../public/images/pokemon.jpg";

import { PokemonSection, TitleWrapper } from "./PokemonPage.styled";

import PokemonCentext from "./pokemonLoad/PokemonCentext";

import PokemonList from "./pokemonSearch/PokemonList";

function PokemonPage() {
    const [showContent, setShowContent] = useState(false);
    const [search, setSearch] = useState(true);
    return (
        <>
            <Head>
                <title>pokemon</title>
            </Head>
            <PokemonSection>
                <ContentWrapper>
                    <TitleWrapper>
                        <h2>find your favorite Pokemon</h2>
                    </TitleWrapper>
                    {!showContent ? (
                        <div>
                            <ButtonDark
                                onClick={() => setShowContent(!showContent)}
                            >
                                Start
                            </ButtonDark>
                            <Image src={pikachu} width={400} height={500} />
                        </div>
                    ) : (
                        <div>
                            <ButtonLight
                                onClick={() => setShowContent(!showContent)}
                            >
                                Back
                            </ButtonLight>
                            <ButtonDark onClick={() => setSearch(!search)}>
                                Search-Load
                            </ButtonDark>
                            {search && <PokemonList />}
                            {!search && <PokemonCentext />}
                        </div>
                    )}
                </ContentWrapper>
            </PokemonSection>
        </>
    );
}

export default PokemonPage;
