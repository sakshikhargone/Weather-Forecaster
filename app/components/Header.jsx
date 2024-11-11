import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMenuItems } from "../api/menuItems";

const Header = () => {
  const menuItems = getMenuItems();
  return (
    <div className="row d-flex justify-content-center mt-3 bg-white align-items-center">
      <div className="col-3">
        <Link
          to="/"
          className="text-decoration-none">
          <img
            src={Logo}
            alt="Weather Forecaster"
            className="logo text-dark"
          />
          <h6 className="ms-1 text-dark">Weather Forecaster</h6>
        </Link>
      </div>

      <div className="col-sm-6 d-flex justify-content-end p-3 m-1">
        <FontAwesomeIcon
          icon={faBars}
          className="humburger"
        />
        {menuItems.map((i, index) => {
          return (
            <a
              key={index}
              href={i.url}
              className="text-dark mx-3 text-decoration-none">
              {i.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
