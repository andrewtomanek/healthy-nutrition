import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { storage } from "../firebase/firebase";
import { FoodUnit } from "../types/shared";

type Props = {
  item: FoodUnit;
};

const ImageCard = ({ item }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const getImageUrl = async () => {
    return await storage
      .ref("images")
      .child(item.image + ".jpg")
      .getDownloadURL();
  };

  useEffect(() => {
    getImageUrl().then((url) => setImageUrl(url));
  }, []);

  return (
    <PictureContainer style={{ zIndex: item.picked ? 1 : 3 }}>
      {imageUrl ? (
        <PictureCard
          src={imageUrl}
          alt={item.image}
          style={{
            filter: item.picked ? `hue-rotate(180deg)` : `hue-rotate(0deg)`,
          }}
        />
      ) : (
        <svg width="1024" height="768" viewBox="0 0 100 100">
          <rect width="1024" height="768" rx="10" ry="10" fill="#ff6600" />
        </svg>
      )}
    </PictureContainer>
  );
};

export default ImageCard;

const PictureContainer = styled.div`
  grid-area: 1 / 1 / 3 / 1;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PictureCard = styled.img`
  height: 100%;
  max-height: 55vh;
`;
