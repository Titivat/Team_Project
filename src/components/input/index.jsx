import {
    Background,
    Forum,
    Title,
    Text,
    UserInput,
    Description,
    Button,
    LayoutVertical,
    LayoutHorizontal,
    DroupDownMenu,
    DroupDownItem
} from './style/input';

export default function Input({ children, ...restProps }) {
    return (
        <Background {...restProps}>
            {children}
        </Background>
    )
}

Input.Forum = function InputForum({ children, ...restProps }) {
    return (
        <Forum {...restProps}>{children}</Forum>
    );
};

Input.Title = function InputTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    );
};

Input.Text = function InputText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    );
};

Input.UserInput = function InputUserInput({ children, ...restProps }) {
    return (
        <UserInput {...restProps}>{children}</UserInput>
    );
};

Input.Description = function InputDescription({ children, ...restProps }) {
    return (
        <Description {...restProps}>{children}</Description>
    );
};


Input.LayoutVertical = function InputLayoutVertical({ children, ...restProps }) {
    return (
        <LayoutVertical {...restProps}>{children}</LayoutVertical>
    );
};

Input.LayoutHorizontal = function InputLayoutHorizontal({ children, ...restProps }) {
    return (
        <LayoutHorizontal {...restProps}>{children}</LayoutHorizontal>
    );
};

Input.DroupDownMenu = function InputDroupDownMenu({ children, ...restProps }) {
    return (
        <DroupDownMenu {...restProps}>{children}</DroupDownMenu>
    );
};

Input.DroupDownItem = function InputDroupDownItem({ children, ...restProps }) {
    return (
        <DroupDownItem {...restProps}>{children}</DroupDownItem>
    );
};

Input.Button = function InputButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>{children}</Button>
    );
};