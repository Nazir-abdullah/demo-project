import Image from "next/image";
import Link from "next/link";

import { ButtonDark } from "components/shared/buttons/Buttons";
import { Card } from "components/shared/cards/Cards.styled";
import { CharacterSection } from "components/rickAndMorty/character/CharacterPage.styled";
import { ContentWrapper } from "components/shared/elements/Elements";

import { rickMortyUrl } from "helpers/constants";

// export const getStaticPaths = async () => {
//     const res = await fetch(rickMortyUrl);
//     const data = await res.json();

//     const paths = data.results.map(
//         (character: { id: { toString: () => any } }) => {
//             return {
//                 params: { id: character.id.toString() }
//             };
//         }
//     );

//     return {
//         fallback: false,
//         paths
//     };
// };

export const getServerSideProps = async context => {
    const id = context.params.id;
    const res = await fetch(rickMortyUrl + "/" + id);
    const data = await res.json();

    return {
        props: { character: data }
    };
};

const Details = ({ character }) => {
    return (
        <CharacterSection>
            <ContentWrapper>
                <Card>
                    <h1>{character.name}</h1>
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={100}
                        height={250}
                    />
                    <p>{character.gender}</p>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.location.name}</p>
                </Card>
            </ContentWrapper>
            <ContentWrapper>
                <Link href={"/rickMorty"} passHref>
                    <ButtonDark>All Characters</ButtonDark>
                </Link>
            </ContentWrapper>
        </CharacterSection>
    );
};

export default Details;
