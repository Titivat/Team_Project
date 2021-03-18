import { Input } from '../components'
import React, { useState } from "react";
import * as API from '../api/callApi';


export default function InputComponent() {

    const handleSubmit = (evt) => {
        //evt.preventDefault();
        const data = {
            "username": userName,
            "email": email,
            "password": password,
        }
        API.postEvent('login/', data);
    }
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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

    return (
        <Input >
            <Input.Forum
                onSubmit={handleSubmit}
                color={theme}
            >
                <Input.LayoutHorizontal gap={'30px'}>
                    <Input.Title textColor={textColor}>Login</Input.Title>
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
                        placeholder="Title"
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
                    <Input.Button color={buttonTheme} type="summit">Send</Input.Button>
                </Input.LayoutHorizontal>
            </Input.Forum>
        </Input >
    );
}