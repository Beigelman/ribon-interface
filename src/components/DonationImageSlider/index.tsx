import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

export type Props = {
  mainNgoImage: string;
  sliderImages: Array<Record<any, string>>;
};

function DonationImageSlider({
  mainNgoImage,
  sliderImages,
}: Props): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide);
    },
  });

  function detailsKeys() {
    return [...Array(slider.details().size).keys()];
  }

  return (
    <>
      <S.NavigationWrapper>
        <div ref={sliderRef} className="keen-slider" id="slider">
          <S.SlideImage
            image={mainNgoImage}
            className="keen-slider__slide"
            aria-label="NgoImage 1"
          />
          {sliderImages.map((item, idx) => {
            return (
              <S.SlideImage
                key={idx.toString()}
                image={item.imageUrl}
                className="keen-slider__slide"
                aria-label="NgoImage 3"
              />
            );
          })}
        </div>

        {slider && (
          <>
            <ArrowLeft
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                slider.prev();
              }}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                e.stopPropagation();
                slider.next();
              }}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </S.NavigationWrapper>

      {slider && (
        <S.Dots>
          {detailsKeys().map((idx) => {
            return (
              <S.ButtonSlider
                type="button"
                aria-label="Slider"
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={`dot${currentSlide === idx ? " active" : ""}`}
              />
            );
          })}
        </S.Dots>
      )}
    </>
  );
}

export default DonationImageSlider;
