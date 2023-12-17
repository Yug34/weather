import {useEffect, useRef, useState} from "react";
import Flex from "./components/common/Flex.tsx";
import {getAPIString, getAPIStringLongLat} from "./utils";
import { WeatherResponse } from "./types";
import * as Styles from "./App.Styles.tsx";
import {WeatherDisplay} from "./components/WeatherDisplay";

const App = () => {
    // Has any error occurred in the query?
    const [queryErrorStatus, setQueryErrorStatus] = useState<boolean>(false);
    const [queryErrorMessage, setQueryErrorMessage] = useState<string | null>(null);

    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = async () => {
        const inputValue = inputRef.current!.value;

        const res = await fetch(getAPIString(inputValue));
        console.log(res);
        if (res.status !== 200) {
            const data = await res.json();
            setQueryErrorStatus(true);
            setQueryErrorMessage(data.message);
        } else {
            const data: WeatherResponse = await res.json();
            setWeatherData(data);
        }
    };

    const submitForm = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            void submitHandler();
        }
    };

    useEffect(() => {
        const input = inputRef.current!;
        input.addEventListener("keydown", submitForm);
        input.focus();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const res = await fetch(getAPIStringLongLat(position.coords.longitude, position.coords.latitude));
                const data: WeatherResponse = await res.json();

                input.value = data.name;
                setWeatherData(data);
            });
        }

        return () => input.removeEventListener("keydown", submitForm);
    }, []);

    return (
        <Styles.Layout>
            <Styles.WeatherContainer>
                <Flex>
                    <Styles.StyledInput type={"text"} placeholder={"Type location here"} ref={inputRef}/>
                    <Styles.StyledButton onClick={submitHandler}>Submit</Styles.StyledButton>
                </Flex>
                {queryErrorStatus && (
                    <Styles.ErrorMessage>{queryErrorMessage}</Styles.ErrorMessage>
                )}
                {weatherData && (
                    <WeatherDisplay weatherData={weatherData} />
                )}
            </Styles.WeatherContainer>
        </Styles.Layout>
    );
}

export default App;