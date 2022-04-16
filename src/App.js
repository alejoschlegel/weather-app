import { useState, useEffect } from 'react'; //Se agregó el { useState }
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { render } from '@testing-library/react';
/* const {
  REACT_APP_WHEATHER_APIKEY
} = process.env; */

export default function App() {
  const [cities, setCities] = useState([]);
  //run once when the component loads
  useEffect(() => {
    onlyOnce();
  }, []);

  let onlyOnce = (function() {
    var executed = false;
    return function() {
      if (!executed) {
        executed = true;
        onSearch("Buenos Aires");
        onSearch("Washington DC");
        onSearch("Berlin");
        onSearch("London");
        onSearch("Tokyo");
      }
    };
  })();

  function onSearch(input) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_WHEATHER_APIKEY}&units=metric`)
      .then(r => r.json())
      .then((e) => {
        if(e.main !== undefined){
          const city = {
            temp: e.main.temp,
            feels_like: e.main.feels_like,
            humidity: e.main.humidity,
            min: Math.round(e.main.temp_min),
            max: Math.round(e.main.temp_max),
            img: e.weather[0].icon,
            id: e.id,
            name: e.name,
            weather: e.weather[0].main,
            wind: e.wind.speed,
          };
          if(!cities.find(e => e.id === city.id)){
            setCities(oldCities => [...oldCities, city]);
          }
        } else {
          alert("City not found");
        }
      });
    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}