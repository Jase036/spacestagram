import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ImageProvider } from "./components/ImageContext";
import { ErrorProvider } from "./components/ErrorContext";

ReactDOM.render(
  <ErrorProvider>
    <ImageProvider>
      <App />
    </ImageProvider>
  </ErrorProvider>,
  document.getElementById("root")
);
