import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ImageProvider } from "./context/ImageContext";
import { ErrorProvider } from "./context/ErrorContext";

ReactDOM.render(
  <ErrorProvider>
    <ImageProvider>
      <App />
    </ImageProvider>
  </ErrorProvider>,
  document.getElementById("root")
);
