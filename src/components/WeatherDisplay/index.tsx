import {WeatherResponse} from "../../types";
import Flex from "../common/Flex.tsx";
import styled from "styled-components";
import {Arrow, CloudSVG, HumiditySVG, LoaderSVG, WindSVG} from "../../SVGs";
import {px2vw} from "../../utils";

interface WeatherDisplayProps {
    weatherData: WeatherResponse;
    loading: boolean;
}

const WeatherDisplayContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  justify-content: center;
  height: 100%;
  row-gap: 2rem;

  transition-duration: 400ms;
`;

const WeatherDescription = styled.div`
  font-size: clamp(1.75rem, ${px2vw(2 * 16)}, 2rem);
  text-transform: capitalize;
  margin-bottom: -6px;
`;

const WeatherRow = styled(Flex)`
  align-items: flex-end;
  justify-content: center;
  column-gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WeatherRowTextContainer = styled(Flex)`
  width: fit-content;
  align-items: flex-end;
  column-gap: 6px;
`;

const LocationText = styled.div`
  font-size: clamp(1.75rem, ${px2vw(2 * 16)}, 2rem);
  margin-bottom: -6px;
`;

const TempText = styled.div`
  font-size: clamp(1.5rem, ${px2vw(1.75 * 16)}, 1.75rem);
  margin-bottom: -4px;
`;

const InfoCardContainer = styled(Flex)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: fit-content;
  }
`;

const InfoCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  row-gap: 1rem;
`;

export const WeatherDisplay = ({weatherData, loading}: WeatherDisplayProps) => {
    return (
        <WeatherDisplayContainer>
            <MainWeatherContainer>
                <WeatherRow>
                    <WeatherRowTextContainer>
                        <WeatherDescription>{weatherData.weather[0].description}</WeatherDescription>
                    </WeatherRowTextContainer>
                    <WeatherRowTextContainer>
                        <div>in</div>
                        <LocationText>{weatherData.name},</LocationText>
                        <div>{weatherData.sys.country}</div>
                    </WeatherRowTextContainer>
                </WeatherRow>
                <WeatherRow>
                    <WeatherRowTextContainer>
                        Temperature is <TempText>{Math.round(weatherData.main.temp)}°C,</TempText>
                    </WeatherRowTextContainer>
                    <WeatherRowTextContainer>
                        feels like <TempText>{Math.round(weatherData.main.feels_like)}°C.</TempText>
                    </WeatherRowTextContainer>
                </WeatherRow>
            </MainWeatherContainer>

            <InfoCardContainer>
                <InfoCard>
                    <WindSVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <InfoText>
                        <div>Wind {weatherData.wind.speed} m/s</div>
                        <div>
                            {weatherData.wind.deg}°
                            <Arrow rotation={weatherData.wind.deg}/>
                        </div>
                    </InfoText>
                </InfoCard>
                <InfoCard>
                    <HumiditySVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <InfoText>
                        <div>Humidity {weatherData.main.humidity}%</div>
                    </InfoText>
                </InfoCard>
                <InfoCard>
                    <CloudSVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <InfoText>
                        <div>Cloud cover {weatherData.clouds.all}%</div>
                        <div>Or {weatherData.clouds.all / 12.5} Okta</div>
                    </InfoText>
                </InfoCard>
            </InfoCardContainer>

            {loading && <LoaderSVG size={"2rem"}/>}
        </WeatherDisplayContainer>
    );
};