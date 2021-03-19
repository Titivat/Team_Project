import { Link as ReachRouterLink } from 'react-router-dom';
import {
    Background,
    Forum,
    LoginForum,
    RegisterForum,
    Title,
    Text,
    UserInput,
    Description,
    Button,
    LayoutVertical,
    LayoutHorizontal,
    LayoutTimeVertical,
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

Input.LoginForum = function InputLoginForum({ children, ...restProps }) {
    return (
        <LoginForum {...restProps}>{children}</LoginForum>
    );
};

Input.RegisterForum = function InputRegisterForum({ children, ...restProps }) {
    return (
        <RegisterForum {...restProps}>{children}</RegisterForum>
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

Input.TextLink= function InputTextLink({ to, children, ...restProps }) {
    return (
        <ReachRouterLink style={{ textDecoration: 'none' }} to={to}>
            <Text {...restProps}>{children}</Text>
        </ReachRouterLink>
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

Input.LayoutTimeVertical = function InputLayoutTimeVertical({ children, ...restProps }) {
    return (
        <LayoutTimeVertical {...restProps}>{children}</LayoutTimeVertical>
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