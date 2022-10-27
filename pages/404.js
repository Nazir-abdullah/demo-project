import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";

import { ButtonDark, ButtonLight } from "components/shared/buttons/Buttons";
import { ErrorPage } from "components/rickAndMorty/character/CharacterPage.styled";

function NoteFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 30000);
    }, [router]);
    return (
        <ErrorPage>
            <h1>Oooooooops.........</h1>
            <h3>That page can not be found</h3>
            <p>
                <Link href={"/"} passHref>
                    <ButtonLight>Back to Home</ButtonLight>
                </Link>
            </p>
            <ButtonDark
                /* this is an example of a shallow routing */
                onClick={() =>
                    router.push("/pokemon", undefined, { shallow: true })
                }
            >
                Pokemon
                <p>Shallow routing</p>
            </ButtonDark>
        </ErrorPage>
    );
}

export default NoteFound;
