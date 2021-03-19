import styled from 'styled-components/macro';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Forum = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 600px;
    height: 650px;
    margin: 40px 30px;
    padding: 20px;
    border-radius: 15px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};

    @media only screen and (max-width: 800px){
        margin: 20px 10px;
        width: 400px;
    }
`;

export const LoginForum = styled(Forum)`
    margin: 3% 3%;
    width: 420px;
    height: 400px;

    @media only screen and (max-width: 800px){
        margin: 3% 5px;
    }
`;

export const RegisterForum = styled(Forum)`
    width: 420px;
    height: 500px;
    margin: 5% auto;

    @media only screen and (max-width: 1200px){
        margin: 5% 0 0 4%;
    }


    @media only screen and (max-width: 600px){
        margin: 5% 5px;
    }

`;

export const Title = styled.p`
    margin: 0;
    color: ${({ textColor }) => textColor};
    font-size: 30px;
`;

export const Text = styled(Title)`
    margin: 0;
    font-size: 20px;
`;

export const UserInput = styled.input`
    font-size: 25px;
    border-radius: 7px;
    width: 100%;
    height: 55px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;

export const Description = styled.textarea`
    width: 100%;
    height: 460px;
    font-size: 30px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;

export const Button = styled.button`
    border-radius: 7px;
    width: 100%;
    height: 60px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
`;
export const LayoutTimeVertical = styled.div`
    display: flex;
    gap: ${({ gap }) => gap};

`;

export const LayoutVertical = styled.div`
    display: flex;
    gap: ${({ gap }) => gap};
`;

export const LayoutHorizontal = styled(LayoutVertical)`
    width: 100%;
    flex-direction: column;
`;

export const DroupDownMenu = styled.select`
    border-radius: 6px;
    width: 95px;
    height: 40px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
    size: 20px;

    @media only screen and (max-width: 800px){
        width: 65px;
    }
`;

export const DroupDownItem = styled.option`
    width: 110px;
    height: 26px;
    background: ${({ color }) => color.background};
    color: ${({ color }) => color.textColor};
    size: 20px;
`;
