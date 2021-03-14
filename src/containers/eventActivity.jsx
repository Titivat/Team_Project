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

                        <EventRight.Title>Time:</EventRight.Title>

                        <div style={{display:'flex',gap:'10px'}}>
                            <EventRight.DroupDownMenu
                                required>
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                            </EventRight.DroupDownMenu>

                            <EventRight.DroupDownMenu
                                required>
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                            </EventRight.DroupDownMenu>

                            <EventRight.DroupDownMenu
                                required>
                                <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2000</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2001</EventRight.DroupDownItem>
                                <EventRight.DroupDownItem>2002</EventRight.DroupDownItem>
                            </EventRight.DroupDownMenu>

                            <div style={{display:'flex'}}>
                                <EventRight.DroupDownMenu
                                    required>
                                    <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                                </EventRight.DroupDownMenu>

                                <EventRight.DroupDownMenu
                                    required>
                                    <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                                </EventRight.DroupDownMenu>

                                <EventRight.DroupDownMenu
                                    required>
                                    <EventRight.DroupDownItem value="">None</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>1</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>2</EventRight.DroupDownItem>
                                    <EventRight.DroupDownItem>3</EventRight.DroupDownItem>
                                </EventRight.DroupDownMenu>
                            </div>
                        </div>
                        <EventRight.Button type="summit">Send</EventRight.Button>
                    </EventRight.Forum>
                </EventRight >
            </EventLayout.Right>

        </EventLayout>
    );
}