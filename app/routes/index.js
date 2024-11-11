import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CityList from "../pages/CityList";

const appRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="about"
        Component={About}
      />

      <Route
        exact
        path="/"
        Component={Home}
      />
    </Routes>
  );
};
export default appRoutes;
