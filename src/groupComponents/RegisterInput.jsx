import { Input } from '../components'
import React, { useState } from "react";
import * as API from '../api/callApi';


export default function RegisterInputComponent() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            "username": userName,
            "email": email,
            "password1": password1,
            "password2": password2,
        }
        API.post('registration/', data);
    }
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

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
        <Input>
            <Input.RegisterForum
                onSubmit={handleSubmit}
                color={theme}
            >
                <Input.Title textColor={textColor}>Register</Input.Title>
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
                        value={password1}
                        onChange={e => setPassword1(e.target.value)}
                        placeholder="password"
                        required
                    >
                    </Input.UserInput>
                    <Input.UserInput
                        color={theme}
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        placeholder="conferm password"
                        required
                    >
                    </Input.UserInput>
                    <Input.Button color={buttonTheme} type="summit">Register</Input.Button>
                </Input.LayoutHorizontal>
            </Input.RegisterForum>
        </Input >
    );
}