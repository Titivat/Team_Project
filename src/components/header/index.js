import { Link as ReachRouterLink } from 'react-router-dom';
import * as COLORS from '../../colors/colors';
import {
    Background,
    Logo,
    TextLogo,
    Container
} from './styles/header';

const textColor = COLORS.PRIMARY_COLOR_1
const backgroundColor = COLORS.DECURLATION_COLOR_2
const logoColor = COLORS.PRIMARY_COLOR_1

const theme = {
    text: textColor,
    background: backgroundColor
};

export default function Header({ children, ...restProps }) {
    return (
        <Background color={theme} {...restProps}>
            {children}
        </Background>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo logoColor={logoColor} {...restProps} />
        </ReachRouterLink>
    );
};

Header.Text = function HeaderText({ to, children, ...restProps }) {
    return (
        <ReachRouterLink style={{ textDecoration: 'none' }} to={to}>
            <TextLogo textColor={textColor} {...restProps}>{children}</TextLogo>
        </ReachRouterLink>
    );
};