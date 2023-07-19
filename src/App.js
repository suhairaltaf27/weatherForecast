import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/topButtons";
//import UilReact from "@icons cout/react-unicons/icons/uil-react";


function App() {
return <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-blue-400">

  <TopButtons />
  <Inputs />

  <TimeAndLocation />
  <TemperatureAndDetails />
  <Forecast title="Hourly Forecast" />
  <Forecast title="daily Forecast" />
</div>;
}

export default App;