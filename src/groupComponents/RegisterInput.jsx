import { Input } from '../components'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as API from '../api/callApi';
import * as ROUTE from '../constants/routes';
import * as COLOR from '../constants/colors';

export default function RegisterInputComponent() {
    const [isLoading, setIsLoading] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const history = useHistory();

    const textColor = COLOR.DECURLATION_COLOR_1
    const inputTheme = {
        background: COLOR.PRIMARY_COLOR_1,
        textColor: COLOR.DECURLATION_COLOR_1
    }
    const forumTheme = {
        background: COLOR.PRIMARY_COLOR_2,
        textColor: COLOR.DECURLATION_COLOR_1
    }
    const buttonTheme = {
        background: COLOR.DECURLATION_COLOR_1,
        textColor:  COLOR.PRIMARY_COLOR_1
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

        loading(true);

        const data = {
            "username": userName,
            "email": email,
            "password1": password1,
            "password2": password2,
        }

        const response = await API.post('registration/', data);

        loading(false);

        if (Object.prototype.toString.call(response) === "[object Error]") {
            alert("Error " + response.message)
        } else {
            history.push(ROUTE.EVENT);
        }
    }

    return (
        <Input>
            <Input.RegisterForum
                onSubmit={handleSubmit}
                color={forumTheme}
            >
                <Input.Title textColor={textColor}>Register</Input.Title>
                <Input.LayoutHorizontal gap={'30px'}>
                    <Input.UserInput
                        color={inputTheme}
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="user name"
                        required
                    >
                    </Input.UserInput>

                    <Input.UserInput
                        color={inputTheme}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email"
                        required
                    ></Input.UserInput>

                    <Input.UserInput
                        color={inputTheme}
                        value={password1}
                        onChange={e => setPassword1(e.target.value)}
                        placeholder="password"
                        required
                    >
                    </Input.UserInput>
                    <Input.UserInput
                        color={inputTheme}
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        placeholder="conferm password"
                        required
                    >
                    </Input.UserInput>
                    <Input.Button color={buttonTheme} type="summit">Register</Input.Button>
                </Input.LayoutHorizontal>

                {(isLoading) && (<Input.Text>Loading</Input.Text>)}
            </Input.RegisterForum>
        </Input >
    );
}
