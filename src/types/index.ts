export type AtmosphereType =
    "Thunderstorm"
    | "Drizzle"
    | "Rain"
    | "Snow"
    | "Mist"
    | "Smoke"
    | "Haze"
    | "Fog"
    | "Sand"
    | "Dust"
    | "Ash"
    | "Squall"
    | "Tornado"
    | "Clear"
    | "Clouds";

export type WeatherType = {
    description: string;
    icon: string;
    id: number;
    main: AtmosphereType;
}

export type CoordType = {
    lon: number;
    lat: number;
}

export type WindType = {
    speed: number;
    deg: number;
}

export type WeatherResponse = {
    weather: WeatherType[];
    coord: CoordType;
    wind: WindType;
    clouds: { all: number };
    cod: number;
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
    };
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
}