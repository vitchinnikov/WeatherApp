import styled, { keyframes } from "styled-components";
import { COLORS } from "./theme";

const loaderAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 20;
`;

const LoaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoaderCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${COLORS.GENERAL.WHITE};
  animation: ${loaderAnimation} 1s infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderInner>
        <LoaderCircle style={{ animationDelay: "0s" }} />
        <LoaderCircle style={{ animationDelay: "0.2s" }} />
        <LoaderCircle style={{ animationDelay: "0.4s" }} />
      </LoaderInner>
      Loading
    </LoaderContainer>
  );
};

export default Loader;
