import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Loading = () => {
  return <LoadingDiv />;
};

const LoadingDiv = styled(CircularProgress)`
  margin: 200px 200px;
`;

export default Loading;
