import styled from 'styled-components/macro';

export const Background = styled.div`
    display: grid;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
    grid-template-columns: 0.3fr 0.5fr 1fr;

    @media(max-width: 850px){
        grid-template-columns: repeat( auto-fit, minmax(500px, 1fr))
    }
`;

export const LeftBackground = styled.div`
    background-color: blue;
`;

export const MiddleBackground = styled.div`
    background-color: red;
`;

export const RightBackground = styled.div`
    background-color: yellow;
`;
