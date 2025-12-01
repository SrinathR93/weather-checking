import React from "react";

const Forecast = ({ forecast, location }) => {
  if (!forecast || !forecast.forecastday || !location) {
    return <p className="text-center text-light mt-4">Loading forecast...</p>;
  }

  return (
    <div className="container mt-4">
      {/* Title */}
      <div className="text-center mt-4 p-3 text-light">
        <h3>
          🌦 Forecast Weather of {location.name}, {location.region},{" "}
          {location.country}
        </h3>
      </div>

      {/* Accordion */}
      <div className="accordion accordion-flush" id="forecastAccordion">
        {forecast.forecastday.map((data, index) => (
          <div className="accordion-item mb-3" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                📅 {data.date} — {data.day.condition.text}
                <div className="mb-3">
                     {/* Weather Icon */}
                  <img
                    src={`https:${data.day.condition.icon}`}
                    alt={data.day.condition.text}
                    width="80"
                    height="80"
                  />
                  </div>
              </button>
            </h2>

            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#forecastAccordion"
            >
              <div className="accordion-body text-dark">
               
            
                {/* Weather Stats in Row */}
                <div className="row text-center g-4">
                  <div className="col-md-3">
                    <div className="p-3 bg-primary text-white rounded shadow-sm">
                      <h6>🌡️ Max Temp</h6>
                      <h4>{data.day.maxtemp_c}°C</h4>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="p-3 bg-info text-white rounded shadow-sm">
                      <h6>🌡️ Min Temp</h6>
                      <h4>{data.day.mintemp_c}°C</h4>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="p-3 bg-primary-subtle text-primary rounded shadow-sm border border-primary">
                      <h6>💧 Avg Humidity</h6>
                      <h4>{data.day.avghumidity}%</h4>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="p-3 bg-info-subtle text-info rounded shadow-sm border border-info">
                      <h6>💨 Max Wind</h6>
                      <h4>{data.day.maxwind_kph} km/h</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
