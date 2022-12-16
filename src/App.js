import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Main Components/Navigation";
import Main from "./Components/mobile/Main";
import Login from "./Components/mobile/Login";
import Seller from "./Components/Main Components/Seller";
import Error from "./Components/jsx/Error";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
          <Route index element={<Main/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="Seller" element={<Seller/>} />
          <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
