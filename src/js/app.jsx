import React from 'react';
import SearchCity from './components/SearchCity';
import SearchHistory from './components/SearchHistory';
import WeatherDisplay from './components/WeatherDisplay';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3'>REACT200 Weather Application</h1>
          <br />
          <h4>Always know if you need an umbrella!!</h4>
        </div>
        <div>
          <SearchCity />
        </div>
        <div className='row' width="100%">
          <div className='col-6'>
            <WeatherDisplay />
          </div>
          <div className='col-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}