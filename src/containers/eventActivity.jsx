import { EventLayout } from '../components'
import { InputComponent } from '../groupComponents'

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
                <InputComponent />
            </EventLayout.Right>

        </EventLayout>
    );
}