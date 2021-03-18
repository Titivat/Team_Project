import {
    Background,
    MainContainer,
    Container,
    LoginContainer,
    RegisterContainer
} from './style/layout';

export default function Layout({ children, ...restProps }) {
    return (
        <Background {...restProps}>
            {children}
        </Background>
    )
}

Layout.MainContainer = function LayoutMainContainer({ children, ...restProps }) {
    return <MainContainer {...restProps}>{children}</MainContainer>;
};

Layout.LoginContainer = function LayoutLoginContainer({ children, ...restProps }) {
    return <LoginContainer {...restProps}>{children}</LoginContainer>;
};

Layout.RegisterContainer = function LayoutRegisterContainer({ children, ...restProps }) {
    return <RegisterContainer {...restProps}>{children}</RegisterContainer>;
};

Layout.Container = function LayoutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
