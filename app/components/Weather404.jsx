import WeatherNotFound from "../assets/NotFound.jpg";

const Weather404 = ({ cityName }) => {
  return (
    <>
      <div className="row mt-5 m-sm-5 ">
        <div className="col-10">
          <img
            src={WeatherNotFound}
            alt="404"
            title={cityName}
            className="img-fluid img-404"
          />
        </div>
      </div>
    </>
  );
};

export default Weather404;
