import './App.css';
import Header from './Components/Header/Header';
import WeatherInterface from './Components/WeatherInterface/WeatherInterface';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <WeatherInterface/>
      <Footer/>
    </div>
  );
}

export default App;
