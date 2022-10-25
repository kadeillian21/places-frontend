import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app-css">
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
