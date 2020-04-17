import React from "react";
import styled from "styled-components";
import { FoodUnit } from "../store/reducers/rootReducer";

function importAll(r: any) {
  let images = {};
  r.keys().map((item: string) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
);

type Props = {
  item: FoodUnit;
};

const ImageCard = ({ item }: Props) => {
  return (
    <PictureContainer style={{ zIndex: item.picked ? 1 : 3 }}>
      <PictureCard
        src={images[item.image + ".jpg"].default}
        alt={item.image}
        style={{
          filter: item.picked ? `hue-rotate(180deg)` : `hue-rotate(0deg)`,
        }}
      />
    </PictureContainer>
  );
};

export default ImageCard;

const PictureContainer = styled.div`
  grid-area: 1 / 1 / 3 / 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PictureCard = styled.img`
  height: 70%;
  width: 140%;
  transform: translateX(-20%);
`;

