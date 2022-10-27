import React from "react";

import RickAndMortyPage from "components/rickAndMorty/RickAndMortyPage";

import { rickMortyUrl } from "helpers/constants";

export const getStaticProps = async () => {
    const res = await fetch(rickMortyUrl);
    const data = await res.json();

    return {
        props: { characters: data }
    };
};

export default function rickAndMorty({ characters }) {
    return (
        <>
            <RickAndMortyPage characters={characters} />
        </>
    );
}
