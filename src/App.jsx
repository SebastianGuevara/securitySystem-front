import { Container } from "./components/common/Containers";
import Header from "./components/features/main/Header";
import Sidebar from "./components/features/main/Sidebar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom/dist"
import Map from "./pages/Map";

function App() {

  return (
    <Container>
      <Router>
        <Sidebar/>
        <Header/>
        <Routes>
          <Route path="/map" element={<Map/>}/>
          <Route path="*" element={null}/>
        </Routes>
      </Router>
    </Container>

  )
}

export default App
