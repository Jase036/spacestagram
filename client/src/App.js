import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import HomeFeed from "./components/HomeFeed";
import { ImageContext } from "./context/ImageContext";
import { ErrorContext } from "./context/ErrorContext";
import Error from "./components/Error";

const App = () => {
  const { receiveImageDataFromServer, loadingStatus } =
    useContext(ImageContext);
  const { error, setError } = useContext(ErrorContext);

  useEffect(() => {
    loadingStatus();
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}&count=50` //grabs 50 random images from NASA's APOD API
    )
      .then((res) => res.json())
      .then((data) => receiveImageDataFromServer(data))
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []); // eslint-disable-line

  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          {error ? (
            <Error />
          ) : (
            <Switch>
              <Route path="*">
                <HomeFeed />
              </Route>
            </Switch>
          )}
        </Wrapper>
      </Router>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
`;

export default App;
