import {WeatherResponse} from "../../types";
import {LoaderSVG} from "../../SVGs";
import * as Styles from "./WeatherDisplay.Styles.tsx";
import WeatherIcon from "../WeatherIcon";
import InfoCards from "./InfoCards";
import Temperature from "./Temperature";

interface WeatherDisplayProps {
    weatherData: WeatherResponse;
    loading: boolean;
}

export const WeatherDisplay = ({weatherData, loading}: WeatherDisplayProps) => {
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

                <Temperature weatherData={weatherData}/>
            </Styles.MainWeatherContainer>

            <InfoCards weatherData={weatherData}/>

            {loading && <LoaderSVG size={"2rem"}/>}
        </Styles.WeatherDisplayContainer>
    );
};