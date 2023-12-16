import {useEffect, useRef} from "react";
import styled from "styled-components";
import Flex from "./components/common/Flex.tsx";
import {getAPIString, getAPIStringLongLat} from "./utils";
import {WeatherResponse} from "./types";

const Layout = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid white;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 120px;
  background: transparent;
  border: 1px solid white;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`;

const App = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = async () => {
        const inputValue = inputRef.current!.value;

        const res = await fetch(getAPIString(inputValue));
        const data: WeatherResponse = await res.json();
        console.log(data);
    };

    const submitForm = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            submitHandler();
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
                console.log(data);
            });
        }

        return () => input.removeEventListener("keydown", submitForm);
    }, []);

    return (
        <Layout>
            <Flex>
                <StyledInput type={"text"} placeholder={"Type location here"} ref={inputRef}/>
                <StyledButton onClick={submitHandler}>Submit</StyledButton>
            </Flex>
        </Layout>
    );
}

export default App;