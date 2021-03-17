import { Header } from '../components/'
import * as ROUTES from '../constants/routes';

export default function HeaderContainer({ children }) {

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.MAIN}></Header.Logo>
                <Header.TextLogo to={ROUTES.MAIN} >Logo</Header.TextLogo>
                {children}
            </Header.Frame>
            <Header.FrameRight >
                <Header.Button to={ROUTES.LOGIN} >Login</Header.Button>
                <Header.Button to={ROUTES.REGISTER} >Register</Header.Button>
            </Header.FrameRight>
        </Header>
    );
}
