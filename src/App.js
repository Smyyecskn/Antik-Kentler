import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import GeziCard from "./components/GeziCard";

function App() {
  return (
    <Container className="text-center">
      <Header />
      <GeziCard />
    </Container>
  );
}

export default App;
