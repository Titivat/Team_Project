import { LoginInput } from '../groupComponents'
import { Layout } from '../components'
import { Input } from '../components';

export default function LoginContainer() {
    const textLinkStyle = {
        fontSize: "35px",
        margin: '-20px 0 0px 190px',
        color: 'black',

    }

    return (
        <Layout.LoginContainer>
            <Layout.Container>
                <LoginInput />
                <Input.TextLink to={'/register'} style={textLinkStyle}>register</Input.TextLink>
            </Layout.Container>
            <Layout.Container>

            </Layout.Container>
        </Layout.LoginContainer>
    );
}