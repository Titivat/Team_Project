import styled from 'styled-components/macro';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Forum = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 40px 30px;
    padding: 20px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};

    @media only screen and (max-width: 800px){
        margin: 30px 20px;
        width: 400px;
    }
`;

export const Title = styled.p`
    color: ${({ textColor }) => textColor};
    font-size: 30px;
`;

export const Text = styled(Title)`
    font-size: 20px;
`;

export const UserInput = styled.input`
    font-size: 30px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;

export const Description = styled.textarea`
    font-size: 30px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;

export const Button = styled.button`
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;

export const LayoutVertical = styled.div`
    display: flex;
    gap: ${({ gap }) => gap};
`;

export const LayoutHorizontal = styled(LayoutVertical)`
    flex-direction: column;
`;

export const DroupDownMenu = styled.select`
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
    size: 20px;
`;

export const DroupDownItem = styled.option`
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
    size: 20px;
`;
