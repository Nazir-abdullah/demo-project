import { BsDot } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";

import { ContentWrapper } from "components/shared/elements/Elements";

import {
    Arrow,
    Dot,
    DotsWrapper,
    ImagesWrapper,
    Slider,
    SliderSection,
    SliderTitle
} from "./ImageSlider.styled";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <SliderSection>
            <ContentWrapper>
                <SliderTitle>
                    <h2>Slide your Pic</h2>
                </SliderTitle>
            </ContentWrapper>
            <ContentWrapper>
                <Slider>
                    <Arrow>
                        <MdKeyboardArrowLeft onClick={prevSlide} />
                    </Arrow>
                    <ImagesWrapper>
                        {SliderData.map((slide, index) => {
                            return (
                                <div key={index}>
                                    {index === current && (
                                        <Image
                                            src={slide.image}
                                            alt="travel image"
                                            width={600}
                                            height={300}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </ImagesWrapper>
                    <Arrow>
                        <MdKeyboardArrowRight onClick={nextSlide} />
                    </Arrow>
                </Slider>
            </ContentWrapper>
            <ContentWrapper>
                <DotsWrapper>
                    {SliderData.map((slide, index) => (
                        <span key={index}>
                            <Dot active={index === current}>
                                <BsDot />
                            </Dot>
                        </span>
                    ))}
                </DotsWrapper>
            </ContentWrapper>
        </SliderSection>
    );
};

export default ImageSlider;
