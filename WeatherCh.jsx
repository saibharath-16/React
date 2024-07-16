import axios from 'axios';
import "./Weather.css";
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeatherCh = () => {
  let [city, setCity] = useState('');
  let [temper, setTemper] = useState('');
  let [weathers, setWeathers] = useState('');

  async function tempers() {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e81d8e7eeb1a227d8aa9be8767cbd35e`)
      .then((res) => {
        console.log(res.data.weather[0].main);
        setTemper(res.data.main.temp);
        setWeathers(res.data.weather[0].main);
      });
  }
//   useEffect(() => {
//     const fetchDataInterval = setInterval(() => {
//       fetchWeather();
//     }, 3000); 
//     return () => clearInterval(fetchDataInterval);
//   }, [city]);

  const data = {
    labels: ['Temperature'],
    datasets: [
      {
        label: 'Temperature (K)',
        data: [temper],
        backgroundColor: 'orange',
        borderColor: 'white',
        borderWidth: 1,
        hoverBorderColor: 'rgba(75, 192, 192, 1)'
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weather Chart',
      },
    },
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => { setCity(e.target.value); }} />
      <button onClick={tempers}>Submit</button>
      <div className='temp'>
        Temperature: {temper}<br />
        Weather: {weathers}
      </div>
      <div className='place'>City: {city}</div>
      <div className='chart-container'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default WeatherCh;
