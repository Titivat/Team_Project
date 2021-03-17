import { Layout } from '../components'
import { InputComponent } from '../groupComponents'

export default function MainContainer() {

    return (
        <Layout.MainContainer>
            <Layout.Container>
                <InputComponent />
            </Layout.Container>

            <Layout.Container>
            </Layout.Container>

        </Layout.MainContainer>
    );
}