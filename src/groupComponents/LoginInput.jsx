import { Input } from '../components'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as API from '../api/callApi';
import * as ROUTE from '../constants/routes';

export default function LoginInputComponent() {
    const [isLoading, setIsLoading] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const textColor = "red"
    const backgroundColor = "blue"
    const theme = {
        background: backgroundColor,
        textColor: textColor
    }
    const buttonTheme = {
        background: "yellow",
        textColor: "black"
    }

    const loading = (isLoading) => {
        if (isLoading) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const data = {
            "username": userName,
            "email": email,
            "password": password,
        }
        loading(true);

        const response = await API.get('login/', data);

        loading(false);

        if (Object.prototype.toString.call(response) === "[object Error]") {
            alert("Error " + response.message);
        } else {
            history.push(ROUTE.EVENT)
        }

    }

    return (
        <Input >
            <Input.LoginForum
                onSubmit={handleSubmit}
                color={theme}
            >
                <Input.Title textColor={textColor}>Login</Input.Title>
                <Input.LayoutHorizontal gap={'30px'}>

                    <Input.UserInput
                        color={theme}
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="user name"
                        required
                    >
                    </Input.UserInput>

                    <Input.UserInput
                        color={theme}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email"
                        required
                    ></Input.UserInput>

                    <Input.UserInput
                        color={theme}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    >
                    </Input.UserInput>
                    <Input.Button color={buttonTheme} type="summit">Login</Input.Button>
                </Input.LayoutHorizontal>

                {(isLoading) && (<Input.Text>Loading</Input.Text>)}
            </Input.LoginForum>
        </Input >
    );
}