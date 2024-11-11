import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faSun,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const SlideShow = ({ forecast, location, current }) => {
  const forecasts = forecast.forecastday;

  const setDayHandler = (date) => {
    const _date = new Date(date);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const index = _date.getDay(date);
    const day = days[index];
    return day;
  };
  return (
    <Carousel
      nextIcon={
        <FontAwesomeIcon
          icon={faArrowRight}
          color="blue"
        />
      }
      prevIcon={
        <FontAwesomeIcon
          icon={faArrowLeft}
          color="blue"
        />
      }>
      {forecasts &&
        forecasts.map((_forecast) => (
          <Carousel.Item key={Math.random()}>
            <p className="font-weight-bold text-center">
              <span>{_forecast.date}</span>
              <span className="font-font-weight-bolder text-info ml-2">|</span>
              <span className="ml-2">{setDayHandler(_forecast.date)}</span>
            </p>

            <img
              src={`https:${_forecast.day.condition.icon}`}
              alt=""
              className="w-50 h-25 ml-5 mt-2"
            />
            <ul className="list-unstyled m-2 ml-5 mt-3">
              <li className=" m-2 mt-2 ml-5">
                <FontAwesomeIcon icon={faWind} />
                {_forecast.day.maxwind_kph}
              </li>

              <li className="mt-2 ml-5">
                <FontAwesomeIcon icon={faDroplet} />
                {_forecast.day?.avghumidity}
              </li>
              <li className="mt-2 ml-5 ">
                <FontAwesomeIcon icon={faSun} />
                {_forecast?.day.maxtemp_c}
                <sup>&deg;</sup>C
              </li>
            </ul>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default SlideShow;
