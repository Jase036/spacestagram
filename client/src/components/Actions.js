import React, { useContext } from "react";
import styled from "styled-components";

import Action from "./LikeButton/Action";
import LikeButton from "./LikeButton";
import { ImageContext } from "./ImageContext";
import Loading from "./Loading";

const Actions = ({ image }) => {
  const { state, toggleLiked } = useContext(ImageContext);

  const handleToggleLike = (ev) => {
    ev.stopPropagation();
    toggleLiked(image.date);
  };

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={(ev) => handleToggleLike(ev)}
      >
        <LikeButton liked={image.isLikedByYou} />
      </Action>
      {image.numLikes !== 0 && <Likes>{image.numLikes}</Likes>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;
const Likes = styled.p`
  margin: 11px 0;
`;

export default Actions;
