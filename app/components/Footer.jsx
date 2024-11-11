import { Link } from "react-router-dom";
import { getIcons } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const icons = getIcons();
  return (
    <div className="row footer d-flex justify-content-end mt-1 align-items-center">
      <div className="col-10 col-sm-4">
        <button
          type="button"
          className="btn btn-info rounded-pill p-2 m-1 mx-3">
          Subscribe
        </button>
        {icons.map((i) => {
          return (
            <Link
              to={i.url}
              key={Math.random()}
              target="/blank"
              className="">
              <FontAwesomeIcon
                icon={i.icon}
                className="socialIcons m-2"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
