import { useContext, useState } from "react";
import styled from "styled-components";
import { ImageContext } from "./ImageContext";

import Actions from "./Actions";
import Loading from "./Loading";

const Image = () => {
  const {
    state,
    state: { imageData },
  } = useContext(ImageContext);

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  if (state.isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      {imageData.map((image) => {
        const { copyright, date, explanation, hdurl, title } = image;
        return (
          <div key={date}>
            <Content>
              <Title>Title: {title}</Title>
              <Date>Date: {date}</Date>
              <APOD src={hdurl}></APOD>
              {copyright && <Copyright>&copy;{copyright}</Copyright>}
              <Actions image={image} />
              <Description show={expanded}>
                Description: {explanation}
              </Description>
              <Expand onClick={handleExpand}>
                {expanded ? "Hide" : "Show More..."}
              </Expand>
            </Content>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(max(300px, 90vw), 620px);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;
const Title = styled.p`
  font-weight: bold;
  color: #000;
  padding: 10px 0 0;
  z-index: 2;
`;
const Date = styled.p`
  color: #888;
  padding: 5px 0;
  z-index: 2;
`;
const Copyright = styled.p`
  color: #bbb;
  padding: 2px 10px;
  width: 100%;
  text-align: right;
  font-size: 12px;
`;
const Description = styled.p`
  color: #888;
  padding: 10px;
  height: ${(props) => (props.show ? "100%" : "65px")};
  overflow: hidden;
`;
const APOD = styled.img`
  border-radius: 10px;
  width: min(max(270px, 83vw), 590px);
`;
const Expand = styled.button`
  border: none;
  padding: 5px;
  background: #eee;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
`;
export default Image;
