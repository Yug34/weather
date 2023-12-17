export const px2vw = (size: number, width: number = 1920) => `${(size / width) * 100}vw`;
export const px2vh = (size: number, height: number = 1080) => `${(size / height) * 100}vh`;

export const getAPIString = (location: string) => {
    return `${import.meta.env.VITE_API_BASE_URL}?q=${location}&limit=1&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
}

export const getAPIStringLongLat = (long: number, lat: number) => {
    return `${import.meta.env.VITE_API_BASE_URL}?lat=${lat}&lon=${long}&limit=1&appid=${import.meta.env.VITE_API_KEY}&units=metric`
}

export const celsiusToFahrenheit = (celsius: number) => {
    return ((celsius * 9.0 / 5.0) + 32.0);
}