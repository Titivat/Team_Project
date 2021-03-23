import { RegisterInput } from '../groupComponents'
import { Layout, Input } from '../components'


export default function RegisterContainer() {
    const LinkTextstyle = {
        fontSize: "35px",
        textAlign: 'right',
        color: 'black',
        margin: '-20px 45% 0 0',
    }
    return (
        <Layout.RegisterContainer>
            <Layout.Container style={{backgroundColor:"black"}}>

            </Layout.Container>
            <Layout.Container>
                <RegisterInput />
                <Input.TextLink to={'/login'} style={LinkTextstyle}>login</Input.TextLink>
            </Layout.Container>
        </Layout.RegisterContainer>
    );
}