import React from "react";
import * as S from "./styles";

export type Props = {
  image: string;
  imageAlt: string;
  logoImage?: string;
  logoAlt?: string;
};

function ImageWithLogo({
  image,
  imageAlt,
  logoImage,
  logoAlt,
}: Props): JSX.Element {
  return (
    <S.ImageContainer>
      <S.NgoBackgroundImage src={image} alt={imageAlt} />
      {logoImage && <S.NgoLogo src={logoImage} alt={logoAlt} />}
    </S.ImageContainer>
  );
}

export default ImageWithLogo;
