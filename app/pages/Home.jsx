import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faSun,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../css/Home.module.css";
import SlideShow from "../components/Slideshow";
import { getWeatherForecast } from "../services/forecasts";
import { getLocations } from "../api/cities";
import Loader from "../assets/loader.gif";
import Weather404 from "../components/Weather404";
import MapComponent from "../components/MapComponent";
import doSomething from "../components/DoSomething";
import { geoJson } from "leaflet";
import { getAddress } from "../services/Address";

const Home = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [show404, setShow404] = useState(false);

  useEffect(() => {
    (async () => {
      await getCurrentLocation();
      setShow404(false);
    })();
  }, []);

  const getCurrentLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        doSomething(position.coords.latitude, position.coords.longitude);
        const address = await getAddress(position.coords);
        await gettingWeather(address.address.city.toLowerCase());
        setCity(address.address.city);
        console.log("city name", address.address.city);
      });
    } catch (error) {
      console.error("Error getting :", error.message);
    }
  };

  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  const getWeatherHandler = async () => {
    try {
      if (city?.length > 2) {
        await gettingWeather(city.toLowerCase());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gettingWeather = async (val) => {
    setShow404(false);
    setShowLoader(true);
    setForecast(null);
    setTimeout(async () => {
      const result = await getWeatherForecast(val);
      setForecast(result);
      setShowLoader(false);
      if (result === null) {
        setShow404(true);
      }
    }, 1000);
  };

  return (
    <>
      <div className="row">
        <div className="col loader">
          {showLoader && (
            <>
              <img
                src={Loader}
                alt=""
                className={`${styles.loader}`}
              />
              <p className="text-white font-weight-bold mt-n4">Loading...</p>
            </>
          )}
        </div>
      </div>
      <div className={`row bg-blue main-content`}>
        <div className="col-12 col-sm-11 offset-sm-2">
          <div className="row">
            <div className="col">
              <form className="">
                <div className="row mt-5">
                  <div className="col-12 col-sm-11">
                    <div className="row">
                      <div className="col-11 col-sm-8">
                        <label htmlFor="city"></label>
                        <input
                          type="text"
                          className="form-control h-75"
                          placeholder="Search for your city"
                          name="city"
                          minLength={2}
                          onChange={inputHandler}
                          value={city}
                        />
                      </div>
                      <div className="col-11 col-sm-3 mt-4 ml-sm-n3 d-flex align-items-center">
                        <button
                          type="button"
                          className="btn bg-glassy px-4 py-2 text-primary"
                          onClick={getWeatherHandler}>
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="ml-1 mr-3 text-info"
                          />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {forecast && (
                <>
                  <div className="row mt-5 m-sm-5 ">
                    <div
                      className={`col-11 mx-auto col-sm-6 mx-sm-0 ml-sm-n5 mb-3  p-5 ${styles.border} ${styles.primaryContentPanel}`}>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p className="">{forecast?.location.name}</p>
                          <p className="">{forecast?.location.localtime}</p>
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col text-center">
                          <h3>
                            {forecast?.current.temp_c.toFixed(1)}
                            <sup className="mr-n1">&deg;</sup> C
                          </h3>
                          <p>Stormy</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <ul className="list-unstyled">
                            <li className="mt-2 text-nowrap">
                              <FontAwesomeIcon icon={faWind} />
                              <span className="ml-2">
                                {" "}
                                {forecast.current.wind_kph}
                              </span>
                            </li>
                            <li className="mt-2 text-nowrap">
                              <FontAwesomeIcon icon={faDroplet} />
                              <span className="ml-2">
                                {forecast.current.air_quality.pm2_5}
                              </span>
                            </li>
                            <li className="mt-2 text-nowrap">
                              <FontAwesomeIcon icon={faSun} />
                              <span className="ml-2">
                                {forecast.current.heatindex_c}
                              </span>
                            </li>
                          </ul>
                          <img
                            src={`https:${forecast.current.condition.icon}`}
                            alt={forecast.current.condition.text}
                            className={`${styles.cloud}`}
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`col-12 col-sm-3 p-5 ml-4  ${styles.border} ${styles.primaryContentPanel}`}>
                      <SlideShow
                        current={forecast.current}
                        location={forecast.location}
                        forecast={forecast.forecast}
                        key={Math.random()}
                      />
                    </div>
                  </div>
                </>
              )}

              {show404 && <Weather404 cityName={city} />}
            </div>
          </div>
          <div className="row">
            <div className="col mt-4 mb-4">
              {forecast?.location ? (
                <MapComponent
                  latitude={forecast?.location.lat}
                  longitude={forecast?.location.lon}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
