import {
    Background,
    MainContainer,
    Container,
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

Layout.Container = function LayoutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
