import thermoC from "./assets/thermometer-celsius.svg";
import thermoF from "./assets/thermometer-celsius.svg";
import clearDay from "./assets/clear-day.svg";
import cloudy from "./assets/cloudy.svg";
import dustWind from "./assets/dust-wind.svg";
import rain from "./assets/extreme-drizzle.svg";
import thunderstorm from "./assets/thunderstorms-extreme-rain.svg";
import drizzle from "./assets/drizzle.svg";
import snow from "./assets/snow.svg";
import mist from "./assets/mist.svg";
import smoke from "./assets/smoke-particles.svg";
import fog from "./assets/overcast-fog.svg";
import haze from "./assets/haze.svg";
import dustyWind from "./assets/dust-wind.svg";
import wind from "./assets/wind.svg";
import tornado from "./assets/tornado.svg";
import {AtmosphereType} from "../types";

type ImageMetaData = {
    img: string;
    alt: string;
}

type ImageType = Record<AtmosphereType | string, ImageMetaData>;

const IMAGES: ImageType = {
    "thermoC": {
        img: thermoC,
        alt: "Thermometer in Celsius"
    },
    "thermoF": {
        img: thermoF,
        alt: "Thermometer in Fahrenheit"
    },
    "Clear": {
        img: clearDay,
        alt: "Clear day"
    },
    "Clouds": {
        img: cloudy,
        alt: "Cloudy day"
    },
    "dustWind": {
        img: dustWind,
        alt: "Dusty day"
    },
    "Rain": {
        img: rain,
        alt: "Rainy day"
    },
    "Thunderstorm": {
        img: thunderstorm,
        alt: "Thunderstorm"
    },
    "Drizzle": {
        img: drizzle,
        alt: "Drizzle"
    },
    "Snow": {
        img: snow,
        alt: "Snowy Day"
    },
    "Mist": {
        img: mist,
        alt: "Mist"
    },
    "Smoke": {
        img: smoke,
        alt: "Smoke"
    },
    "Haze": {
        img: haze,
        alt: "Hazy day"
    },
    "Fog": {
        img: fog,
        alt: "Fog"
    },
    "Sand": {
        img: dustyWind,
        alt: "Dusty wind"
    },
    "Dust": {
        img: dustyWind,
        alt: "Dusty wind"
    },
    "Ash": {
        img: smoke,
        alt: "Smoke"
    },
    "Squall": {
        img: wind,
        alt: "Squall"
    },
    "Tornado": {
        img: tornado,
        alt: "Tornado"
    },
};

export default IMAGES;