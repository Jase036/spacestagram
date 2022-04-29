import React, { createContext, useReducer } from "react";

export const ImageContext = createContext(null);

const initialState = {
  imageData: [
    {
      copyright: "",
      date: "",
      explanation: "",
      hdurl: "",
      title: "",
      url: "",
      numLikes: 0,
      isLikedByYou: false,
    },
  ],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "image-info-from-server": {
      // Add numLikes and isLikedByYou properties to each image object.
      const modifiedImageData = action.data.map((image) => {
        return {
          ...image,
          numLikes: Math.floor(Math.random() * 50), //add random integers to image likes to simulate activity by multiple users.
          isLikedByYou: false,
        };
      });
      return {
        ...state,
        imageData: modifiedImageData,
        isLoading: false,
      };
    }
    case "loading-status": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "toggle-like": {
      //copy original state, find the image entry, toggle the like and add/subtract from number of likes.
      const copyImageState = [...state.imageData].map((image) => {
        if (image.date === action.date && !image.isLikedByYou) {
          return { ...image, isLikedByYou: true, numLikes: image.numLikes + 1 };
        } else if (image.date === action.date && image.isLikedByYou) {
          return {
            ...image,
            isLikedByYou: false,
            numLikes: image.numLikes - 1,
          };
        } else {
          return { ...image };
        }
      });
      return {
        ...state,
        imageData: copyImageState,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const ImageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveImageDataFromServer = (data) => {
    dispatch({
      type: "image-info-from-server",
      data,
    });
  };

  const loadingStatus = () => {
    dispatch({
      type: "loading-status",
    });
  };

  const toggleLiked = (date) => {
    dispatch({
      type: "toggle-like",
      date,
    });
  };
  return (
    <ImageContext.Provider
      value={{
        state,
        receiveImageDataFromServer,
        loadingStatus,
        toggleLiked,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
