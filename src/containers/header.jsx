import { Header } from '../components/'

export default function HeaderContainer({ children }) {

    return (
        <Header>
            <Header.Frame>
                <Header.Logo ></Header.Logo>
                <Header.Text >Logo</Header.Text>
                { children }
            </Header.Frame>
        </Header>
    );
}
