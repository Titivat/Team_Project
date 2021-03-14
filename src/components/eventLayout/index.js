import {
    Background,
    LeftBackground,
    MiddleBackground,
    RightBackground
} from './styles/eventLayout';

export default function EventLayout({ children, ...restProps }) {
    return (
        <Background {...restProps}>
            {children}
        </Background>
    );
}

EventLayout.Left = function EventLayoutLeft({ children, ...restProps }) {
    return (
        <LeftBackground {...restProps}>
            {children}
        </LeftBackground>
    );
}

EventLayout.Middle = function EventLayoutMiddle({ children, ...restProps }) {
    return (
        <MiddleBackground {...restProps}>
            {children}
        </MiddleBackground>
    );
}

EventLayout.Right = function EventLayoutRight({ children, ...restProps }) {
    return (
        <RightBackground {...restProps}>
            {children}
        </RightBackground>
    );
}