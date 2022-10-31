import { ButtonDark } from "../../components/shared/buttons/Buttons";
import { ContentWrapper } from "../../components/shared/elements/Elements";
import { PeopleSection } from "./People.styled";
import React, { useState } from "react";

function PeoplePage() {
    const [peopleData, setPeopleData] = useState([]);
    const fetchPeople = async () => {
        const res = await fetch("/api/people");
        const data = await res.json();
        setPeopleData(data);
    };
    return (
        <>
            <PeopleSection>
                <ContentWrapper>
                    <h1>Find people data</h1>
                </ContentWrapper>
                <ContentWrapper>
                    <ButtonDark onClick={fetchPeople}>Load Data</ButtonDark>
                    {peopleData.map(info => (
                        <div key={info.id}>
                            <p>{info.person}</p>
                            <p>{info.birth}</p>
                        </div>
                    ))}
                </ContentWrapper>
            </PeopleSection>
        </>
    );
}

export default PeoplePage;
