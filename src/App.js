import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hambar from "./Components/mobile/Hambar";
import Main from "./Components/mobile/Main";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hambar/>}>
            <Route path="/" element={<Main/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
