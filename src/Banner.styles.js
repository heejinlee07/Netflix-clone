import styled from "styled-components";

export const BannerHeader = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl || null})
  background-position: center center;
`;

export const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const BannerButtons = styled.div``;

export const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  padding: 0.5rem 2rem;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

export const BannerFadeSection = styled.div`
  height: 16.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
