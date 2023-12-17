import * as Styles from "../WeatherDisplay.Styles.tsx";
import thermoF from "../../../static/assets/thermometer-fahrenheit.svg";
import thermoC from "../../../static/assets/thermometer-celsius.svg";
import {useCallback, useState} from "react";
import {celsiusToFahrenheit} from "../../../utils";
import {WeatherResponse} from "../../../types";

interface TemperatureProps {
    weatherData: WeatherResponse;
}

const Temperature = ({weatherData}: TemperatureProps) => {
    const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);

    const formattedTemperature = useCallback((temperature: number) => {
        return Math.round(isFahrenheit ? celsiusToFahrenheit(temperature) : temperature)
    }, [isFahrenheit]);

    const toggleDegrees = () => {
        setIsFahrenheit(!isFahrenheit);
    };

    return (
        <>
            <Styles.TemperatureRow>
                <Styles.ThermoImg
                    src={isFahrenheit ? thermoF : thermoC}
                    alt={`Thermometer in ${isFahrenheit ? "Fahrenheit" : "Celsius"}`}
                />
                <Styles.WeatherRowTextContainer>
                    Temperature is
                    <Styles.TemperatureText>
                        {formattedTemperature(weatherData.main.temp)}°{isFahrenheit ? "F" : "C"},
                    </Styles.TemperatureText>
                </Styles.WeatherRowTextContainer>
                <Styles.WeatherRowTextContainer>
                    feels like
                    <Styles.TemperatureText>
                        {formattedTemperature(weatherData.main.feels_like)}°{isFahrenheit ? "F" : "C"}
                    </Styles.TemperatureText>
                </Styles.WeatherRowTextContainer>
            </Styles.TemperatureRow>
            <Styles.DegreeToggler onClick={toggleDegrees}>Switch to °{isFahrenheit ? "C" : "F"}</Styles.DegreeToggler>
        </>

    )
}

export default Temperature;