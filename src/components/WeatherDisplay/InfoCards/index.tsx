import * as Styles from "../WeatherDisplay.Styles.tsx";
import windSvg from "../../../static/assets/wind.svg";
import {Arrow} from "../../../SVGs";
import humiditySvg from "../../../static/assets/humidity.svg";
import cloudSvg from "../../../static/assets/cloudy.svg";
import {WeatherResponse} from "../../../types";

type InfoCardsProps = {
    weatherData: WeatherResponse;
}

const InfoCards = ({weatherData}: InfoCardsProps) => {
    return (
        <Styles.InfoCardContainer>
            <Styles.InfoCard>
                <Styles.WeatherImage src={windSvg} />
                <Styles.InfoText>
                    <div>Wind {weatherData.wind.speed} m/s</div>
                    <div>
                        {weatherData.wind.deg}°
                        <Arrow rotation={weatherData.wind.deg}/>
                    </div>
                </Styles.InfoText>
            </Styles.InfoCard>
            <Styles.BorderedInfoCard>
                <Styles.WeatherImage src={humiditySvg} />
                <Styles.InfoText>
                    <div>Humidity {weatherData.main.humidity}%</div>
                </Styles.InfoText>
            </Styles.BorderedInfoCard>
            <Styles.InfoCard>
                <Styles.WeatherImage src={cloudSvg} />
                <Styles.InfoText>
                    <div>Cloud cover {weatherData.clouds.all}%</div>
                    <div>Or {weatherData.clouds.all / 12.5} Okta</div>
                </Styles.InfoText>
            </Styles.InfoCard>
        </Styles.InfoCardContainer>
    )
};

export default InfoCards;