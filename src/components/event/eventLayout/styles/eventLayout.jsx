import styled from 'styled-components/macro';

export const Background = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.5fr 1fr;
    grid-template-rows: 850px;

    @media(max-width: 850px){
        grid-template-columns: repeat( auto-fit, minmax(500px, 1fr));
        grid-template-rows: none;
    }
`;

export const LeftBackground = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const MiddleBackground = styled.div`
    overflow-y: scroll;
    background-color: ${({ backgroundColor }) => backgroundColor};

    @media(max-width: 850px){
        overflow-y: hidden;
    }
`;

export const RightBackground = styled.div`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;
