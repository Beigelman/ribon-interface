import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const UserImage = styled(Image)`
  margin-right: -30px;
  z-index: 1;
  border-radius: 30px;
`;

export const LogoImage = styled(Image)`
  margin-left: -30px;
  z-index: 1;
  object-fit: contain;
`;

export const HeartImage = styled.img`
  height: 54px;
  width: auto;
`;

export const AnimationUser = styled.div`
  position: absolute;
  left: 0;
  top: -40px;
`;

export const AnimationLogo = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
`;
