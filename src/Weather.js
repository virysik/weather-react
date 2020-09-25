import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  function handleSubmit(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }

  let apiKey = "974437790c20752769b5d2ac36ae13ef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);
  return <Loader type="Hearts" color="#00BFFF" height={80} width={80} />;
}
