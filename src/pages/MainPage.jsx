import { Container } from "../components/common/Containers"
import Header from "../components/features/main/Header"
import Sidebar from "../components/features/main/Sidebar";

const MainPage = () => {
    return (
        <Container>
            <Sidebar/>
            <Header/>           
        </Container>
    )
}

export default MainPage;