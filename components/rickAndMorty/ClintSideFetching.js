import { useEffect, useState } from "react";
import Image from "next/image";

import { Card } from "components/shared/cards/Cards.styled";

import { Wrapper } from "./ClintSideFetch.styled";

export default function Profile() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;

    return (
        <Wrapper>
            {data.results.map(character => (
                <Card key={character.id}>
                    <h1>{character.name}</h1>
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={300}
                        height={200}
                    />
                    <p>{character.gender}</p>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                </Card>
            ))}
        </Wrapper>
    );
}
