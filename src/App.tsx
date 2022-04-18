import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Test from "./components/Test";

const App: FC = () => {
  const [location, setLocation] = useState<string>();

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((r) => console.log(r.data));
  }, []);
  return (
    <div className="App">
      {/* search for location */}
      <Test />
    </div>
  );
};

export default App;
