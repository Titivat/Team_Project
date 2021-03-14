import { EventLayout, EventRight } from '../components'

export default function EventActvity() {

    return (
        <EventLayout>
            <EventLayout.Left>
                1
            </EventLayout.Left>

            <EventLayout.Middle>
                2
            </EventLayout.Middle>

            <EventLayout.Right>
                <EventRight >
                    <EventRight.Forum>
                        <EventRight.Input
                            placeholder="share to"
                            required
                        ></EventRight.Input>

                        <EventRight.Input
                            placeholder="Title"
                            required
                        ></EventRight.Input>

                        <EventRight.Description
                            placeholder="description"
                            required
                        >
                        </EventRight.Description>

                        <EventRight.Title>Time</EventRight.Title>

                        <EventRight.DroupDownMenu
                            required>
                            <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                            <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                        </EventRight.DroupDownMenu>

                        <EventRight.Button type="summit">Send</EventRight.Button>
                    </EventRight.Forum>
                </EventRight >
            </EventLayout.Right>

        </EventLayout>
    );
}