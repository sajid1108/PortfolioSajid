import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Header />
      <Portfolio />
    </>
  );
}

export default App;
