import { Link as ReachRouterLink } from 'react-router-dom';
import * as COLORS from '../../constants/colors';
import {
    Background,
    Logo,
    TextLogo,
    Container,
    RightContainer,
    Button,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return (
        <Background {...restProps}>
            {children}
        </Background>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.FrameRight = function HeaderFrameRight({ children, ...restProps }) {
    return <RightContainer {...restProps}>{children}</RightContainer>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};

Header.TextLogo = function HeaderTextLogo({ to, children, ...restProps }) {
    return (
        <ReachRouterLink style={{ textDecoration: 'none' }} to={to}>
            <TextLogo {...restProps}>{children}</TextLogo>
        </ReachRouterLink>
    );
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
    return (
        <ReachRouterLink style={{ textDecoration: 'none' }} to={to}>
            <Button {...restProps}>{children}</Button>
        </ReachRouterLink>
    );
};