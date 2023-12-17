import {AtmosphereType} from "../../types";
import IMAGES from "../../static";

type WeatherIconProps = {
    atmosphere: AtmosphereType;
}

const WeatherIcon = ({atmosphere}: WeatherIconProps) => {
    return (
        <img style={{width: "200px", height: "200px"}} src={IMAGES[atmosphere].img} alt={IMAGES[atmosphere].alt} />
    );
};

export default WeatherIcon;