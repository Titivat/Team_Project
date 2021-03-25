import { Input } from '../components'
import React, { useState } from "react";
import { toIso } from '../function'
import * as API from '../api/callApi';
import * as COLOR from '../constants/colors';


export default function InputComponent() {
    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        loading(true);

        const data = {
            "owner": 1,
            "subject": title,
            "message": description,
            "send_on": toIso(day, month, year, hour, minute, secound),
            "reciepient": shareTo,
            "sent": false
        }

        const respond = await API.postEvent('mail/', data);

        loading(false);

        if (respond.status === 201) {
            alert("sent successfully")
        }
    }

    const [isLoading, setIsLoading] = useState(false);

    const loading = (isLoading) => {
        if (isLoading) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

    const [shareTo, setshareTo] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [day, setDay] = useState("");
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState("");

    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [secound, setSecound] = useState("");

    const monthToDay = { 1: "31", 2: "28", 3: "31", 4: '30', 5: '31', 6: "30", 7: "31", 8: '31', 9: '30', 10: '31', 11: '30', 12: '31' }
    const days = range(1, monthToDay[month]);
    const months = range(1, 12);
    const nowYear = new Date().getFullYear();
    const years = range(nowYear, nowYear + 100);

    const hours = range(0, 24);
    const minutes = range(0, 59);
    const secounds = range(0, 59);

    const textColor = COLOR.DECURLATION_COLOR_1
    const inputTheme = {
        background: COLOR.PRIMARY_COLOR_1,
        textColor: COLOR.DECURLATION_COLOR_1
    }
    const forumTheme = {
        background: COLOR.PRIMARY_COLOR_2,
        textColor: COLOR.DECURLATION_COLOR_1
    };
    const buttonTheme = {
        background: COLOR.DECURLATION_COLOR_2,
        textColor: COLOR.PRIMARY_COLOR_1
    };

    return (
        <Input >
            <Input.Forum
                onSubmit={handleSubmit}
                color={forumTheme}
            >
                <Input.Title textColor={textColor}>Try it</Input.Title>
                <Input.UserInput
                    color={inputTheme}
                    value={shareTo}
                    onChange={e => setshareTo(e.target.value)}
                    placeholder="share to"
                    required
                >
                </Input.UserInput>

                <Input.UserInput
                    color={inputTheme}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                ></Input.UserInput>

                <Input.Description
                    color={inputTheme}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="description"
                    required
                >
                </Input.Description>

                <Input.Title textColor={textColor}>Time:</Input.Title>

                <Input.LayoutTimeVertical gap={'10px'} >
                    <Input.LayoutHorizontal>
                        <Input.Text textColor={textColor}>Day:</Input.Text>
                        <Input.DroupDownMenu
                            color={inputTheme}
                            value={day}
                            onChange={e => setDay(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                            {
                                days.map((value) => {
                                    return <Input.DroupDownItem color={inputTheme} >{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutHorizontal>
                        <Input.Text textColor={textColor}>Month:</Input.Text>
                        <Input.DroupDownMenu
                            color={inputTheme}
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                            {
                                months.map((value) => {
                                    return <Input.DroupDownItem color={inputTheme} >{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutHorizontal>
                        <Input.Text textColor={textColor} >Year:</Input.Text>
                        <Input.DroupDownMenu
                            color={inputTheme}
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                            {
                                years.map((value) => {
                                    return <Input.DroupDownItem color={inputTheme}>{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutVertical gap ='4px'>
                        <Input.LayoutHorizontal>
                            <Input.Text textColor={textColor}>Hr:</Input.Text>
                            <Input.DroupDownMenu
                                color={inputTheme}
                                value={hour}
                                onChange={e => setHour(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                                {
                                    hours.map((value) => {
                                        return <Input.DroupDownItem color={inputTheme}>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>

                        <Input.LayoutHorizontal>
                            <Input.Text textColor={textColor}>Min:</Input.Text>
                            <Input.DroupDownMenu
                                color={inputTheme}
                                value={minute}
                                onChange={e => setMinute(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                                {
                                    minutes.map((value) => {
                                        return <Input.DroupDownItem color={inputTheme}>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>

                        <Input.LayoutHorizontal>
                            <Input.Text textColor={textColor}>Sec:</Input.Text>
                            <Input.DroupDownMenu
                                color={inputTheme}
                                value={secound}
                                onChange={e => setSecound(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem color={inputTheme} value="">None</Input.DroupDownItem>
                                {
                                    secounds.map((value) => {
                                        return <Input.DroupDownItem color={inputTheme}>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>
                    </Input.LayoutVertical>
                </Input.LayoutTimeVertical>

                <Input.Button color={buttonTheme} type="summit">Send</Input.Button>

                {(isLoading) && (<Input.Text>Loading</Input.Text>)}
            </Input.Forum>
        </Input >
    );
}