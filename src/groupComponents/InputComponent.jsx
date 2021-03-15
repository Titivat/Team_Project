import { EventRight } from '../components'
import React, { useState } from "react";
import * as API from '../api/callApi';

export default function InputComponent() {

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const handleSubmit = (evt) => {
        //evt.preventDefault();
        const data = `ShareTo: ${shareTo} \n Title: ${title} \n Description: ${description}
                \n Day: ${day} \n Month: ${month} \nYear: ${year}
                \n Hour: ${hour} \n Minute: ${minute} \n Secound: ${secound}
            `
        API.getEvent('path', data)
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
        <EventRight >
            <EventRight.Forum onSubmit={handleSubmit}>
                <EventRight.Input
                    value={shareTo}
                    onChange={e => setshareTo(e.target.value)}
                    placeholder="share to"
                    required
                >
                </EventRight.Input>

                <EventRight.Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                ></EventRight.Input>

                <EventRight.Description
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="description"
                    required
                >
                </EventRight.Description>

                <EventRight.Title>Time:</EventRight.Title>

                <EventRight.LayoutVertical gap={'10px'} >
                    <EventRight.LayoutHorizontal>
                        <EventRight.Text>Day:</EventRight.Text>
                        <EventRight.DroupDownMenu
                            value={day}
                            onChange={e => setDay(e.target.value)}
                            required
                        >
                            <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                            {
                                days.map((value) => {
                                    return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                })
                            }
                        </EventRight.DroupDownMenu>
                    </EventRight.LayoutHorizontal>

                    <EventRight.LayoutHorizontal>
                        <EventRight.Text>Month:</EventRight.Text>
                        <EventRight.DroupDownMenu
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                            required
                        >
                            <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                            {
                                months.map((value) => {
                                    return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                })
                            }
                        </EventRight.DroupDownMenu>
                    </EventRight.LayoutHorizontal>

                    <EventRight.LayoutHorizontal>
                        <EventRight.Text>Year:</EventRight.Text>
                        <EventRight.DroupDownMenu
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        >
                            <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                            {
                                years.map((value) => {
                                    return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                })
                            }
                        </EventRight.DroupDownMenu>
                    </EventRight.LayoutHorizontal>

                    <EventRight.LayoutVertical>
                        <EventRight.LayoutHorizontal>
                            <EventRight.Text>Hr:</EventRight.Text>
                            <EventRight.DroupDownMenu
                                value={hour}
                                onChange={e => setHour(e.target.value)}
                                required
                            >
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                {
                                    hours.map((value) => {
                                        return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                    })
                                }
                            </EventRight.DroupDownMenu>
                        </EventRight.LayoutHorizontal>

                        <EventRight.LayoutHorizontal>
                            <EventRight.Text>Min:</EventRight.Text>
                            <EventRight.DroupDownMenu
                                value={minute}
                                onChange={e => setMinute(e.target.value)}
                                required
                            >
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                {
                                    minutes.map((value) => {
                                        return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                    })
                                }
                            </EventRight.DroupDownMenu>
                        </EventRight.LayoutHorizontal>

                        <EventRight.LayoutHorizontal>
                            <EventRight.Text>Sec:</EventRight.Text>
                            <EventRight.DroupDownMenu
                                value={secound}
                                onChange={e => setSecound(e.target.value)}
                                required
                            >
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                {
                                    secounds.map((value) => {
                                        return <EventRight.DroupDownItem>{value}</EventRight.DroupDownItem>
                                    })
                                }
                            </EventRight.DroupDownMenu>
                        </EventRight.LayoutHorizontal>
                    </EventRight.LayoutVertical>
                </EventRight.LayoutVertical>
                <EventRight.Button type="summit">Send</EventRight.Button>
            </EventRight.Forum>
        </EventRight >
    );
}