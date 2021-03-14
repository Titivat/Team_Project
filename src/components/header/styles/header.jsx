import styled from 'styled-components/macro';

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    color: ${({ color }) => color.text};
    background-color: ${({ color }) => color.background};
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
  background-color: ${({ logoColor }) => logoColor};
`;

export const TextLogo = styled.p`
    color: ${({ textColor }) => textColor};
    padding-bottom: 10px;
    font-size: 30px;
`;