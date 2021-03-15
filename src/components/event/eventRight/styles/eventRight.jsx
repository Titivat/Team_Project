import styled from 'styled-components/macro';

export const Background = styled.div`
    padding: 30px;
    margin: 50px auto;
    width: 600px;
    border-radius: 20px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const LayoutVertical = styled.div`
    display: flex;
    gap: ${({ gap }) => gap};
`;

export const LayoutHorizontal = styled(LayoutVertical)`
    flex-direction: column;
`;

export const Forum = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`;

export const Titile = styled.p`
    font-size: 30px;
    margin: 0;
    color: ${({ textColor }) => textColor};
`;

export const Text = styled.p`
    font-size: 20px;
    margin: 0;
    color: ${({ textColor }) => textColor};
`;

export const Input = styled.input`
    border-radius: 15px;
    font-size: 20px;
    width: 570px;
    height: 50px;
    color: ${({ color }) => color.textColor};
    background-color: ${({ color }) => color.backgroundColor};

    ::-webkit-input-placeholder {
        color: ${({ color }) => color.textColor};
    }
    ::-moz-placeholder {
        color: ${({ color }) => color.textColor};
    }
    :-ms-input-placeholder {
        color: ${({ color }) => color.textColor};
    }
    :-moz-placeholder {
        color: ${({ color }) => color.textColor};
    }
`;

export const Description = styled.textarea`
    border-radius: 15px;
    font-size: 20px;
    width: 570px;
    height: 300px;
    resize: none;
    color: ${({ color }) => color.textColor};
    background-color: ${({ color }) => color.backgroundColor};

    ::-webkit-input-placeholder {
        color: ${({ color }) => color.textColor};
    }
    ::-moz-placeholder {
        color: ${({ color }) => color.textColor};
    }
    :-ms-input-placeholder {
        color: ${({ color }) => color.textColor};
    }
    :-moz-placeholder {
        color: ${({ color }) => color.textColor};
    }
`;

export const DroupDownMenu = styled.select`
    width: 90px;
    height: 50px;
    border-radius: 3px;
    color: ${({ color }) => color.textColor};
    background-color: ${({ color }) => color.backgroundColor};
`;

export const DroupDownItem = styled.option`
`;

export const Button = styled.button`
    width: 570px;
    height: 50px;
    border-radius: 15px;
    color: ${({ color }) => color.textColor};
    background-color: ${({ color }) => color.backgroundColor};
`;
