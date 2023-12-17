import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  display: flex;
  column-gap: 4px;

  &:hover {
    background: white;
    color: black;
  }
`;