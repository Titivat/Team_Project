import * as COLORS from '../../../colors/colors';
import {
    Background,
    LeftBackground,
    MiddleBackground,
    RightBackground
} from './styles/eventLayout';

const LEFT_BACKGROUND = "white";
const MIDDLE_BACKGROUND = COLORS.PRIMARY_COLOR_3;
const RIGHT_BACKGROUND = "white";

export default function EventLayout({ children, ...restProps }) {
    return (
        <Background {...restProps}>
            {children}
        </Background>
    );
}

EventLayout.Left = function EventLayoutLeft({ children, ...restProps }) {
    return (
        <LeftBackground backgroundColor = {LEFT_BACKGROUND} {...restProps}>
            {children}
        </LeftBackground>
    );
}

EventLayout.Middle = function EventLayoutMiddle({ children, ...restProps }) {
    return (
        <MiddleBackground   backgroundColor = {MIDDLE_BACKGROUND} {...restProps}>
            {children}
        </MiddleBackground>
    );
}

EventLayout.Right = function EventLayoutRight({ children, ...restProps }) {
    return (
        <RightBackground backgroundColor = {RIGHT_BACKGROUND} {...restProps}>
            {children}
        </RightBackground>
    );
}