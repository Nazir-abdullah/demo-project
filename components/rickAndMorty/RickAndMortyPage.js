/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ContentWrapper } from "components/shared/elements/Elements";

import { Card } from "components/shared/cards/Cards.styled";

import {
    CharactersWrapper,
    SectionWrapper,
    TitleWrapper
} from "./RickAndMorty.styled";
import ClintSideFetching from "./ClintSideFetching";
import Head from "next/head";

function RickAndMortyPage({ characters }) {
    return (
        <>
            <Head>
                <title>Rick&Morty</title>
                <link rel="shortcut icon" href="../../public/favicon.ico" />
            </Head>
            <SectionWrapper>
                <ContentWrapper>
                    <TitleWrapper>
                        <h1>All Characters</h1>
                    </TitleWrapper>
                    <CharactersWrapper>
                        {characters.results.map(character => (
                            <Card key={character.id}>
                                <Link
                                    href={`/rickMorty/${character.id}`}
                                    passHref
                                >
                                    <a>
                                        <Image
                                            src={character.image}
                                            alt={character.name}
                                            width={100}
                                            height={100}
                                        />
                                        <h3>{character.name}</h3>
                                    </a>
                                </Link>
                            </Card>
                        ))}
                    </CharactersWrapper>
                </ContentWrapper>
            </SectionWrapper>
            <ContentWrapper>
                <ClintSideFetching />
            </ContentWrapper>
        </>
    );
}

export default RickAndMortyPage;
