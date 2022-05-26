const fetch = require("node-fetch");
const url =
  "https://api.covidactnow.org/v2/counties.json?apiKey=95e3c7c6be35472c885b9a3cdf8e0027";

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);
