import {WeatherResponse} from "../../types";
import Flex from "../common/Flex.tsx";
import styled from "styled-components";
import {Arrow, CloudSVG, HumiditySVG, WindSVG} from "../../SVGs";
import {px2vw} from "../../utils";

interface WeatherDisplayProps {
    weatherData: WeatherResponse;
}

const WeatherDisplayContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;

  transition-duration: 400ms;
`;

const WeatherDescription = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
`;

const WeatherRow = styled(Flex)`
  align-items: flex-end;
  justify-content: center;
  column-gap: 0.5rem;
`;

const LocationText = styled.div`
  font-size: 1rem;
  margin-bottom: 6px;
`;

const InfoCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem;
`;

const InfoText = styled(Flex)`
  flex-direction: column;
  margin-top: 1rem;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
  }
`;

const MainWeatherContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherDisplay = ({weatherData}: WeatherDisplayProps) => {
    return (
        <WeatherDisplayContainer>
            <MainWeatherContainer>
                <WeatherDescription>{weatherData.weather[0].description}</WeatherDescription>
                <WeatherRow>
                    <LocationText>in</LocationText>
                    <div style={{fontSize: "2rem"}}>{weatherData.name},</div>
                    <LocationText>{weatherData.sys.country}</LocationText>
                </WeatherRow>
                <WeatherRow>
                    <div>{weatherData.main.temp}°C,</div>
                    <div>feels like {weatherData.main.feels_like}°C</div>
                </WeatherRow>
            </MainWeatherContainer>

            <Flex>
                <InfoCard>
                    <WindSVG size={`clamp(3rem, ${px2vw(5 * 16)}, 5rem)`}/>
                    <InfoText>
                        <div>Wind {weatherData.wind.speed} m/s</div>
                        <div>
                            {weatherData.wind.deg}°
                            <Arrow rotation={weatherData.wind.deg}/>
                        </div>
                    </InfoText>
                </InfoCard>
                <InfoCard>
                    <HumiditySVG size={`clamp(3rem, ${px2vw(5 * 16)}, 5rem)`}/>
                    <InfoText>
                        <div>Humidity {weatherData.main.humidity}%</div>
                    </InfoText>
                </InfoCard>
                <InfoCard>
                    <CloudSVG size={`clamp(3rem, ${px2vw(5 * 16)}, 5rem)`}/>
                    <InfoText>
                        <div>Cloud cover {weatherData.clouds.all}%</div>
                        <div>Or {weatherData.clouds.all / 12.5} Okta</div>
                    </InfoText>
                </InfoCard>
            </Flex>
        </WeatherDisplayContainer>
    );
};