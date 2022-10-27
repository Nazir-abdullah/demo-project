import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos
} from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";

import { Arrow, ContentWrapper } from "components/shared/elements/Elements";

import {
    Slide,
    SlideActive,
    Slider,
    SliderSection,
    SliderTitle,
    SliderTitleWrapper
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

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <SliderSection>
            <ContentWrapper>
                <Slider>
                    <SliderTitleWrapper>
                        <SliderTitle>Slide your Pic</SliderTitle>
                    </SliderTitleWrapper>
                    <Arrow>
                        <MdOutlineArrowBackIos onClick={prevSlide} />
                    </Arrow>
                    <Arrow>
                        <MdOutlineArrowForwardIos onClick={nextSlide} />
                    </Arrow>
                    {SliderData.map((slide, index) => {
                        return (
                            <div key={index}>
                                {index === current ? (
                                    <SlideActive />
                                ) : (
                                    <Slide />
                                )}
                                {/* key={index} */}
                                {index === current && (
                                    <div>
                                        <Image
                                            src={slide.image}
                                            alt="travel image"
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </Slider>
            </ContentWrapper>
        </SliderSection>
    );
};

export default ImageSlider;
