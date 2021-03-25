import { LoginInput } from '../groupComponents'
import { Layout } from '../components'
import { Input } from '../components';

export default function LoginContainer() {
    const textLinkStyle = {
        fontSize: "35px",
        margin: '-8% 0 0px 40%',
        color: '#0247A1',
    }

    const rightLayoutContainer = {
        height: '145%',
        backgroundColor: '#CAF0F8',
    }

    return (
        <Layout.LoginContainer>
            <Layout.Container >
                <LoginInput />
                <Input.TextLink to={'/register'} style={textLinkStyle}>register</Input.TextLink>
            </Layout.Container>
            <Layout.Container style={rightLayoutContainer}>

            </Layout.Container>
        </Layout.LoginContainer>
    );
}