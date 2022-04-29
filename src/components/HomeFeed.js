import RenderImageFeed from "./RenderImageFeed";
import styled from "styled-components";

const HomeFeed = () => {
  return (
    <Wrapper>
      <TitleDiv>
        <Title>Spacestagram</Title>
        <Credit>Brought to you by NASA's Astronomy Photo of the Day API</Credit>
      </TitleDiv>
      <Divider></Divider>
      <RenderImageFeed />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
`;
const TitleDiv = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0px;
  backface-visibility: hidden;
  z-index: 3;
  background-color: #fff;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Credit = styled.p`
  color: #888;
  font-size: 14px;
`;
const Divider = styled.div`
  margin: 0px;
  height: 20px;
  background-color: #eee;
`;
export default HomeFeed;
