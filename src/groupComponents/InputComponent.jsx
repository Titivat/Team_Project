import { Input } from '../components'
import React, { useState } from "react";
import { toIso } from '../function'
import * as API from '../api/callApi';


export default function InputComponent() {
    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const handleSubmit = (evt) => {
        //evt.preventDefault();
        const data = {
            "owner": 1,
            "subject": title,
            "message": description,
            "send_on": toIso(day, month, year, hour, minute, secound),
            "reciepient": shareTo,
            "sent": false
        }
        API.postEvent('mail/', data);
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

    return (
        <Input >
            <Input.Forum onSubmit={handleSubmit}>
                <Input.Title>Try it</Input.Title>
                <Input.UserInput
                    value={shareTo}
                    onChange={e => setshareTo(e.target.value)}
                    placeholder="share to"
                    required
                >
                </Input.UserInput>

                <Input.UserInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                ></Input.UserInput>

                <Input.Description
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="description"
                    required
                >
                </Input.Description>

                <Input.Title>Time:</Input.Title>

                <Input.LayoutVertical gap={'10px'} >
                    <Input.LayoutHorizontal>
                        <Input.Text>Day:</Input.Text>
                        <Input.DroupDownMenu
                            value={day}
                            onChange={e => setDay(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem value="">None</Input.DroupDownItem>
                            {
                                days.map((value) => {
                                    return <Input.DroupDownItem >{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutHorizontal>
                        <Input.Text>Month:</Input.Text>
                        <Input.DroupDownMenu
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem value="">None</Input.DroupDownItem>
                            {
                                months.map((value) => {
                                    return <Input.DroupDownItem >{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutHorizontal>
                        <Input.Text>Year:</Input.Text>
                        <Input.DroupDownMenu
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        >
                            <Input.DroupDownItem value="">None</Input.DroupDownItem>
                            {
                                years.map((value) => {
                                    return <Input.DroupDownItem>{value}</Input.DroupDownItem>
                                })
                            }
                        </Input.DroupDownMenu>
                    </Input.LayoutHorizontal>

                    <Input.LayoutVertical>
                        <Input.LayoutHorizontal>
                            <Input.Text>Hr:</Input.Text>
                            <Input.DroupDownMenu
                                value={hour}
                                onChange={e => setHour(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem value="">None</Input.DroupDownItem>
                                {
                                    hours.map((value) => {
                                        return <Input.DroupDownItem>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>

                        <Input.LayoutHorizontal>
                            <Input.Text>Min:</Input.Text>
                            <Input.DroupDownMenu
                                value={minute}
                                onChange={e => setMinute(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem value="">None</Input.DroupDownItem>
                                {
                                    minutes.map((value) => {
                                        return <Input.DroupDownItem>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>

                        <Input.LayoutHorizontal>
                            <Input.Text>Sec:</Input.Text>
                            <Input.DroupDownMenu
                                value={secound}
                                onChange={e => setSecound(e.target.value)}
                                required
                            >
                                <Input.DroupDownItem value="">None</Input.DroupDownItem>
                                {
                                    secounds.map((value) => {
                                        return <Input.DroupDownItem>{value}</Input.DroupDownItem>
                                    })
                                }
                            </Input.DroupDownMenu>
                        </Input.LayoutHorizontal>
                    </Input.LayoutVertical>
                </Input.LayoutVertical>
                <Input.Button type="summit">Send</Input.Button>
            </Input.Forum>
        </Input >
    );
}