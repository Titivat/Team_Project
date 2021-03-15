import { EventRight } from '../components'
import React, { useState } from "react";

export default function InputComponent() {
    const [shareTo, setshareTo] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [secound, setSecound] = useState("");

    

    const handleSubmit = (evt) => {
        //evt.preventDefault();
        alert(`ShareTo: ${shareTo} \n Title: ${title} \n Description: ${description}
                \n Day: ${day} \n Month: ${month} \nYear: ${year}
                \n Hour: ${hour} \n Minute: ${minute} \n Secound: ${secound}
            `
        );
    }

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
                            <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
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
                            <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
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
                            <EventRight.DroupDownItem>2000</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>2001</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>2002</EventRight.DroupDownItem>
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
                                <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
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
                                <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
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
                                <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                            </EventRight.DroupDownMenu>
                        </EventRight.LayoutHorizontal>
                    </EventRight.LayoutVertical>
                </EventRight.LayoutVertical>
                <EventRight.Button type="summit">Send</EventRight.Button>
            </EventRight.Forum>
        </EventRight >
    );
}