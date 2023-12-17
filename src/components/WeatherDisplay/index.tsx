import {WeatherResponse} from "../../types";
import {Arrow, CloudSVG, HumiditySVG, LoaderSVG, WindSVG} from "../../SVGs";
import {celciusToFahrenheit, px2vw} from "../../utils";
import {useState} from "react";
import * as Styles from "./WeatherDisplay.Styles.tsx";

interface WeatherDisplayProps {
    weatherData: WeatherResponse;
    loading: boolean;
}

export const WeatherDisplay = ({weatherData, loading}: WeatherDisplayProps) => {
    const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);

    const toggleDegrees = () => {
        setIsFahrenheit(!isFahrenheit);
    }

    return (
        <Styles.WeatherDisplayContainer>
            <Styles.MainWeatherContainer>
                <Styles.WeatherRow>
                    <Styles.WeatherRowTextContainer>
                        <Styles.WeatherDescription>{weatherData.weather[0].description}</Styles.WeatherDescription>
                    </Styles.WeatherRowTextContainer>
                    <Styles.WeatherRowTextContainer>
                        <div>in</div>
                        <Styles.LocationText>{weatherData.name},</Styles.LocationText>
                        <div>{weatherData.sys.country}</div>
                    </Styles.WeatherRowTextContainer>
                </Styles.WeatherRow>
                <Styles.WeatherRow>
                    <Styles.WeatherRowTextContainer>
                        Temperature is
                        <Styles.TempText>
                            {Math.round(isFahrenheit ? celciusToFahrenheit(weatherData.main.temp) : weatherData.main.temp)}°{isFahrenheit ? "F" : "C"},
                        </Styles.TempText>
                    </Styles.WeatherRowTextContainer>
                    <Styles.WeatherRowTextContainer>
                        feels
                        like <Styles.TempText>{Math.round(isFahrenheit ? celciusToFahrenheit(weatherData.main.feels_like) : weatherData.main.feels_like)}°{isFahrenheit ? "F" : "C"}.</Styles.TempText>
                    </Styles.WeatherRowTextContainer>
                </Styles.WeatherRow>
                <Styles.DegreeToggler onClick={toggleDegrees}>Switch to °{isFahrenheit ? "C" : "F"}</Styles.DegreeToggler>

            </Styles.MainWeatherContainer>

            <Styles.InfoCardContainer>
                <Styles.InfoCard>
                    <WindSVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <Styles.InfoText>
                        <div>Wind {weatherData.wind.speed} m/s</div>
                        <div>
                            {weatherData.wind.deg}°
                            <Arrow rotation={weatherData.wind.deg}/>
                        </div>
                    </Styles.InfoText>
                </Styles.InfoCard>
                <Styles.BorderedInfoCard>
                    <HumiditySVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <Styles.InfoText>
                        <div>Humidity {weatherData.main.humidity}%</div>
                    </Styles.InfoText>
                </Styles.BorderedInfoCard>
                <Styles.InfoCard>
                    <CloudSVG size={`clamp(3rem, ${px2vw(8 * 16)}, 8rem)`}/>
                    <Styles.InfoText>
                        <div>Cloud cover {weatherData.clouds.all}%</div>
                        <div>Or {weatherData.clouds.all / 12.5} Okta</div>
                    </Styles.InfoText>
                </Styles.InfoCard>
            </Styles.InfoCardContainer>

            {loading && <LoaderSVG size={"2rem"}/>}
        </Styles.WeatherDisplayContainer>
    );
};