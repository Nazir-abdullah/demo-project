import Cards from "components/shared/cards/Cards";
import Head from "next/head";
import Header from "components/shared/header/Header";
import Link from "next/link";

import { SliderData } from "./slider/SliderData";
import ImageSlider from "./slider/ImageSlider";

const HomePage = function () {
    return (
        <>
            <Head>
                <title>home</title>
                <link rel="shortcut icon" href="public/favicon.ico" />
            </Head>
            <Header />
            <Cards />
            <ImageSlider slides={SliderData} />
            <Link href={"/api"}>go to hello rout</Link>
        </>
    );
};

export default HomePage;
