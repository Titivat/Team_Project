import { LoginInput } from '../groupComponents'
import { Layout } from '../components'

export default function LoginContainer() {

    return (
        <Layout.LoginContainer>
            <Layout.Container>
                <LoginInput />
            </Layout.Container>
            <Layout.Container>

            </Layout.Container>
        </Layout.LoginContainer>
    );
}