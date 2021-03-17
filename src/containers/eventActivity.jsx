import { EventLayout } from '../components'
import { InputComponent } from '../groupComponents'

export default function EventActvity() {

    return (
        <EventLayout>
            <EventLayout.Left>
                <InputComponent />
            </EventLayout.Left>

            <EventLayout.Middle>
                2
            </EventLayout.Middle>

            <EventLayout.Right>

            </EventLayout.Right>

        </EventLayout>
    );
}