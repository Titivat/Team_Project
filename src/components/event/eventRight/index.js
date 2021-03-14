import {
    Background,
    Forum,
    Titile,
    Text,
    Input,
    Description,
    DroupDownMenu,
    DroupDownItem,
    Button
} from './styles/eventRight';

const backgroundColor = "red";
const textColor = "white";

const color = {
    backgroundColor,
    textColor
}

export default function EventRight({ children, ...restProps }) {
    return (
        <Background backgroundColor={backgroundColor} {...restProps}>
            {children}
        </Background>
    );
}

EventRight.Forum = function EventRightForum({ children, ...restProps }) {
    return (
        <Forum {...restProps}>
            {children}
        </Forum>
    );
}

EventRight.Title = function EventRightTitle({ children, ...restProps }) {
    return (
        <Titile textColor={textColor} {...restProps}>
            {children}
        </Titile>
    );
}

EventRight.Text = function EventRightText({ children, ...restProps }) {
    return (
        <Text textColor={textColor} {...restProps}>
            {children}
        </Text>
    );
}

EventRight.Input = function EventRightInput({ children, ...restProps }) {
    return (
        <Input color={color} {...restProps}>
            {children}
        </Input>
    );
}

EventRight.Description = function EventRightDescription({ children, ...restProps }) {
    return (
        <Description color={color} {...restProps}>
            {children}
        </Description>
    );
}

EventRight.DroupDownMenu = function EventRightDroupDownMenu({ children, ...restProps }) {
    return (
        <DroupDownMenu color={color} {...restProps}>
            {children}
        </DroupDownMenu>
    );
}

EventRight.DroupDownItem = function EventRightDroupDownItem({ children, ...restProps }) {
    return (
        <DroupDownItem backgroundColor={backgroundColor} {...restProps}>
            {children}
        </DroupDownItem>
    );
}

EventRight.Button = function EventRightButton({ children, ...restProps }) {
    return (
        <Button color={color} {...restProps}>
            {children}
        </Button>
    );
}
