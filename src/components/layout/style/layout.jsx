import styled from 'styled-components/macro';

export const Background = styled.div`

`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1fr;


    @media only screen and (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

export const Container = styled.div`
    background-color: ${({ background }) => background};
`;