import Header from "./Components/Header/Header";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}

export default App;
