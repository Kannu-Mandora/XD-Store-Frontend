import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hambar from "./Components/mobile/Hambar";
import Main from "./Components/mobile/Main";
import Error from "./Components/jsx/Error";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hambar/>}>
            <Route index element={<Main/>} />
          </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
