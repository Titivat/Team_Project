import { Link as ReachRouterLink } from 'react-router-dom';
import {
    Background,
    Logo,
    TextLogo,
    Container
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

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <Logo {...restProps} />
      </ReachRouterLink>
    );
};

Header.Text = function HeaderText({ to, children, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <TextLogo {...restProps}>{children}</TextLogo>
        </ReachRouterLink>
        );
};