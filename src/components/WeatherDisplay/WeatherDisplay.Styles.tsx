import styled from "styled-components";
import Flex from "../common/Flex.tsx";
import {px2vw} from "../../utils";
import {StyledButton} from "../common/StyledButton.tsx";

export const WeatherDisplayContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;
  row-gap: 2rem;

  transition-duration: 400ms;
`;

export const WeatherDescription = styled.div`
  font-size: clamp(1.75rem, ${px2vw(2 * 16)}, 2rem);
  text-transform: capitalize;
  margin-bottom: -6px;
`;

export const WeatherRow = styled(Flex)`
  align-items: flex-end;
  justify-content: center;
  column-gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WeatherRowTextContainer = styled(Flex)`
  width: fit-content;
  align-items: flex-end;
  column-gap: 6px;
`;

export const LocationText = styled.div`
  font-size: clamp(1.75rem, ${px2vw(2 * 16)}, 2rem);
  margin-bottom: -6px;
`;

export const TempText = styled.div`
  font-size: clamp(1.5rem, ${px2vw(1.75 * 16)}, 1.75rem);
  margin-bottom: -4px;
`;

export const InfoCardContainer = styled(Flex)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 360px;
  }
`;

export const InfoCard = styled(Flex)<{ $isMiddle?: boolean }>`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
`;

export const BorderedInfoCard = styled(InfoCard)`
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

export const InfoText = styled(Flex)`
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
  }
`;

export const MainWeatherContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const DegreeToggler = styled(StyledButton)`
  width: 140px;
  border: 1px solid white;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  top: 1rem;
  right: 1rem;

  &:hover {
    background: white;
    color: black;
  }
`;