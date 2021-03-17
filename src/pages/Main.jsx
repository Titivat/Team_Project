import { HeaderContainer , MainContainer} from '../containers'

export default function Main(){
    return(
        <>
            <HeaderContainer isLogin={false} />
            <MainContainer/>
        </>
    );

}