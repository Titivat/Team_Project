import { Header } from '../components/'
import * as ROUTES from '../constants/routes';
import * as COLORS from '../constants/colors';

export default function HeaderContainer({ children, isLogin }) {
    const textColor = COLORS.PRIMARY_COLOR_1
    const backgroundColor = COLORS.DECURLATION_COLOR_2
    const logoColor = COLORS.PRIMARY_COLOR_1

    const backgroundTheme = {
        text: textColor,
        background: backgroundColor
    };

    const buttonThem = {
        text: COLORS.DECURLATION_COLOR_2,
        background: COLORS.PRIMARY_COLOR_1
    }

    return (
        <Header color={backgroundTheme}  >
            <Header.Frame>
                <Header.Logo
                    to={ROUTES.MAIN}
                    logoColor={logoColor}
                >
                </Header.Logo>
                <Header.TextLogo
                    textColor={textColor}
                    to={ROUTES.MAIN}
                >
                    Logo
                </Header.TextLogo>
                {children}
            </Header.Frame>
            <Header.FrameRight >
                {(isLogin) ?
                    <>
                       
                    </>
                    :
                    <>
                        <Header.Button color={buttonThem} to={ROUTES.LOGIN}>Login</Header.Button>
                        <Header.Button to={ROUTES.REGISTER} color={buttonThem}>Register</Header.Button>
                    </>
                }

            </Header.FrameRight>
        </Header>
    );
}
