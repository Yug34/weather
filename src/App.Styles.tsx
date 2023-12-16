import styled from "styled-components";
import Flex from "./components/common/Flex.tsx";

export const Layout = styled(Flex)`
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

export const WeatherContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  min-height: 100vh;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid white;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 120px;
  background: transparent;
  border: 1px solid white;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  text-transform: capitalize;
`;