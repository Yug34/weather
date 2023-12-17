import {WeatherResponse} from "../../types";
import {LoaderSVG} from "../../SVGs";
import {celsiusToFahrenheit} from "../../utils";
import {useState} from "react";
import * as Styles from "./WeatherDisplay.Styles.tsx";
import WeatherIcon from "../WeatherIcon";
import thermoC from "../../static/assets/thermometer-celsius.svg";
import thermoF from "../../static/assets/thermometer-fahrenheit.svg";
import InfoCards from "./InfoCards";

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
                <WeatherIcon atmosphere={weatherData.weather[0].main} />
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
                        <Styles.ThermoImg
                            src={isFahrenheit ? thermoF : thermoC}
                            alt={`Thermometer in ${isFahrenheit ? "Fahrenheit" : "Celsius"}`}
                        />
                        Temperature is
                        <Styles.TempText>
                            {Math.round(isFahrenheit ? celsiusToFahrenheit(weatherData.main.temp) : weatherData.main.temp)}°{isFahrenheit ? "F" : "C"},
                        </Styles.TempText>
                    </Styles.WeatherRowTextContainer>
                    <Styles.WeatherRowTextContainer>
                        feels
                        like <Styles.TempText>{Math.round(isFahrenheit ? celsiusToFahrenheit(weatherData.main.feels_like) : weatherData.main.feels_like)}°{isFahrenheit ? "F" : "C"}.</Styles.TempText>
                    </Styles.WeatherRowTextContainer>
                </Styles.WeatherRow>
                <Styles.DegreeToggler onClick={toggleDegrees}>Switch to °{isFahrenheit ? "C" : "F"}</Styles.DegreeToggler>
            </Styles.MainWeatherContainer>

            <InfoCards weatherData={weatherData}/>

            {loading && <LoaderSVG size={"2rem"}/>}
        </Styles.WeatherDisplayContainer>
    );
};