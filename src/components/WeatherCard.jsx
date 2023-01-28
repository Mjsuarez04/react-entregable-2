import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsious, setIsCelsious] = useState(true);

  const handleClick = () => setIsCelsious(!isCelsious);
  return (
    <article className="card">
      <h1 className="card__title">Weather App</h1>
      <h2 className="card__subtitle">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="card__body">
        <div className="card__img-container">
          <img
            className="card__img"
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
        <section className="card__info">
          <h3 className="card__info-title">
            "{weather?.weather[0].description}"
          </h3>
          <ul className="card__info-body">
            <li className="card__info-item">
              <span className="card__info-label">Wind Speed:</span>{" "}
              {weather?.wind.speed}m/s
            </li>
            <li className="card__info-item">
              <span className="card__info-label">Clouds: </span>{" "}
              {weather?.clouds.all}%
            </li>
            <li className="card__info-item">
              <span className="card__info-label">Pressure: </span>{" "}
              {weather?.main.pressure}hPa
            </li>
          </ul>
        </section>
      </div>
      <footer className="card__footer">
        <h2 className="card__temperature">
          {isCelsious
            ? temperature?.celsious + "°C"
            : temperature?.farenheit + "°F"}
        </h2>
        <button className="card__btn" onClick={handleClick}>
          Change to °{isCelsious ? "F" : "C"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;
