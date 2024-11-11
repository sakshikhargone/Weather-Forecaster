import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./routes/index";
import Footer from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="container-fluid no-gutters">
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
