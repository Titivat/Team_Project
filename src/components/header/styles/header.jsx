import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    color: #EAE8E8;
    background-color: #03045E;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 55px;
  margin-right: 40px;
`;

export const TextLogo = styled.p`
  font-size: 30px;
  margin-right: 30px;
`;