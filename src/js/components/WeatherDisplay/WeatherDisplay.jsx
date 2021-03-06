import React from 'react';

const WeatherDisplay = (props) => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">City Information</div>
      <div className="card">
        <div className="card-body">
        <h3 className='text-center'><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} id="weather-icon" alt=''/>{props.name}</h3>
          <h6 className="text-center">Lat/Long: {props.lat}{props.lon}</h6>
        </div>
        <hr className="horizontalLine" />
        <div className="row format">
          <div className="col text-center format">
            <h6 className="h6 strong">Temperature (F)</h6>
            <h4 className="weatherInfo">{props.temp}</h4>
          </div>
          <div className="col text-center format">
            <h6 className="h6 strong">Pressure</h6>
            <h4 className="weatherInfo">{props.pressure}</h4>
          </div>
          <div className="col text-center format">
            <h6 className="h6 strong">Humidity</h6>
            <h4 className="weatherInfo">{props.humidity}</h4>
          </div>
        </div>
        <div className="row format">
          <div className="col text-center format">
            <h6 className="h6 strong">Lowest Temp (F)</h6>
            <h4 className="weatherInfo">{props.temp_min}</h4>
          </div>
          <div className="col text-center format">
            <h6 className="h6 strong">Highest Temp (F)</h6>
            <h4 className="weatherInfo">{props.temp_max}</h4>
          </div>
          <div className="col text-center format">
            <h6 className="h6 strong">Wind Speed</h6>
            <h4 className="weatherInfo">{props.wind}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;