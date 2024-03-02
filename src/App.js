import './App.css';
import Forecast from './components/Forecast';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import Inputs from './components/Inputs';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';


function App() {

  const [query, setQuery] = useState({ q: "Delhi"});
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(( ) => {
    const fetchWeather = async ( ) => {
      await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data);
      })
    };

  fetchWeather();
  }, [query, units]);

const changebackground =() => {
  if (!weather) return 'from-cyan-700 to-blue-700'
  const flag = units === 'metric' ? 20 : 60
  if (weather.temp <= flag) return 'from-cyan-700 to-blue-700'

  return 'from-yellow-700 to-orange-700'
}

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-grey-400 ${changebackground()}`} >
      <Inputs />
      {weather && (
        <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              <Forecast title="Daily forecast" items={weather.daily} />
          </div>
      )}
     </div>
    );
}

export default App;
