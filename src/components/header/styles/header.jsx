import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    color: #EAE8E8;
    background-color: #03045E;
`;

export const Container = styled.div`
  display: flex;
  margin: 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 55px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
`;

export const TextLogo = styled.p`
    color: #FFFFFF;
    padding-bottom: 10px;
    font-size: 30px;
`;