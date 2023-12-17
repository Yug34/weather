import { WeatherResponse } from "../../types";
import Flex from "../common/Flex.tsx";
import styled from "styled-components";

interface WeatherDisplayProps {
    weatherData: WeatherResponse;
}

const WeatherDisplayContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;
`;

const WeatherDescription = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
`;

const WeatherRow = styled(Flex)`
  align-items: flex-end;
  column-gap: 0.5rem;
`;

const LocationText = styled.div`
  font-size: 1rem;
  margin-bottom: 6px;
`;

const InfoCard = styled(Flex)`
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem;
`;

export const WeatherDisplay = ({weatherData}: WeatherDisplayProps) => {
    return (
        <WeatherDisplayContainer>
            <Flex $flexDirection={"column"}>
                <WeatherDescription>{weatherData.weather[0].description}</WeatherDescription>
                <WeatherRow>
                    <LocationText>in</LocationText>
                    <div style={{fontSize: "2rem"}}>{weatherData.name},</div>
                    <LocationText>{weatherData.sys.country}</LocationText>
                </WeatherRow>
                <WeatherRow>
                    <div>{weatherData.main.temp}°C, </div>
                    <div>feels like {weatherData.main.feels_like}°C</div>
                </WeatherRow>
            </Flex>

            <Flex>
                <InfoCard>
                    <div>Humidity: {weatherData.main.humidity}%</div>
                </InfoCard>
                <InfoCard>
                    <div>wind deg: {weatherData.wind.deg}°</div>
                    <div>wind speed: {weatherData.wind.speed} meter/sec</div>
                </InfoCard>
                <InfoCard>
                    <div>cloud: {weatherData.clouds.all}%, or {weatherData.clouds.all / 8} Okta</div>
                </InfoCard>
            </Flex>
        </WeatherDisplayContainer>
    );
};