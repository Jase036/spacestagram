import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const Error = () => {
  return (
    <Wrapper>
      <ErrorImg
        src="https://cdn.dribbble.com/users/1537480/screenshots/7199901/media/04f1bc09a3a16f5efc155fe9ea829cbc.png"
        alt="error"
      />
      <ErrMsg>
        Oooops! Looks like you should have taken a right turn at Saturn. Try{" "}
        <Anchor onClick={() => window.location.reload()}> refreshing</Anchor>{" "}
        the page.
      </ErrMsg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
`;
const ErrMsg = styled.p`
  max-width: 500px;
  font-size: 25px;
  align-self: center;
  text-align: center;
`;
const Anchor = styled.a`
  cursor: pointer;
  color: ${COLORS.primary};
`;
const ErrorImg = styled.img`
  width: min(max(300px, 90vw), 620px); ;
`;

export default Error;
