import {useEffect, useRef, useState} from "react";
import Flex from "./components/common/Flex.tsx";
import {getAPIString, getAPIStringLongLat} from "./utils";
import { WeatherResponse } from "./types";
import * as Styles from "./App.Styles.tsx";
import {WeatherDisplay} from "./components/WeatherDisplay";
import {LoaderSVG} from "./SVGs";

const App = () => {
    const [queryErrorStatus, setQueryErrorStatus] = useState<boolean>(false);
    const [queryErrorMessage, setQueryErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(JSON.parse(localStorage.getItem('weatherData')!) ?? null);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = async () => {
        setQueryErrorStatus(false);
        setLoading(true);

        try {
            const inputValue = inputRef.current!.value;
            const res = await fetch(getAPIString(inputValue));

            if (res.status === 200) {
                const data: WeatherResponse = await res.json();
                localStorage.setItem('weatherData', JSON.stringify(data));
                setWeatherData(data);
            } else {
                const data = await res.json();
                setQueryErrorStatus(true);
                setQueryErrorMessage(data.message);
            }
        } catch (error) {
            setQueryErrorStatus(true);
            setQueryErrorMessage("An unknown error occurred");
            console.log(error);
        } finally {
            setLoading(false);
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
                    <Styles.StyledButton onClick={submitHandler}>
                        {loading && <LoaderSVG/>}
                        Submit
                    </Styles.StyledButton>
                </Flex>
                {queryErrorStatus && (
                    <Styles.ErrorMessage>{queryErrorMessage}</Styles.ErrorMessage>
                )}
                {weatherData ? (
                    <WeatherDisplay weatherData={weatherData} loading={loading} />
                ) : (
                    <Styles.InstructionsContainer>
                        <Styles.Instructions>Allow the permission, or search for a location!</Styles.Instructions>
                        {loading && <LoaderSVG size={"2rem"}/>}
                    </Styles.InstructionsContainer>
                )}
            </Styles.WeatherContainer>
        </Styles.Layout>
    );
}

export default App;