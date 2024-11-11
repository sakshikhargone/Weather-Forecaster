import { Link } from "react-router-dom";
import { getLocations } from "../api/cities";
const CityList = () => {
  const cities = getLocations();

  return (
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-7">
        <h3>List of cities</h3>
        {cities.map((city, index) => {
          return (
            <Link
              className="text-dark m-2"
              to={city.url}
              key={index}>
              {city.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CityList;
