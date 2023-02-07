import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Main Components/Navigation";
import Loader from "./Components/jsx/Loader";
const Main = lazy(()=> import("./Components/mobile/Main"))
const Login = lazy(() => (import("./Components/mobile/Login")))
const Seller = lazy(() => (import("./Components/Main Components/Seller")))
const Error = lazy(() => (import("./Components/jsx/Error")))
const Electronics = lazy(() => (import("./Components/Main Components/products/Electronics")))
const Fashion = lazy(() => (import("./Components/Main Components/products/Fashion")))
const App = () => {
  return (
    <Suspense fallback={<div className="grid place-content-center h-screen fixed w-screen" ><Loader loading={true} /></div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Main />} />
            <Route path="Login" element={<Login />} />
            <Route path="Seller" element={<Seller />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
