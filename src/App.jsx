import { Container } from "./components/common/Containers";
import Header from "./components/features/main/Header";
import Sidebar from "./components/features/main/Sidebar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom/dist"
import Map from "./pages/Map";
import Login from "./pages/Login";

function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="*"
              element={
                <>
                  <Sidebar />
                  <Header />
                  <Routes>
                    <Route path="/map" element={<Map />} />
                  </Routes>
                </>
              }
            />
        </Routes>
      </Router>
    </Container>

  )
}

export default App
