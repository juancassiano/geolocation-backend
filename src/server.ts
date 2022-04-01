import express from "express";
import axios from "axios";

const API_KEY = "&key=AIzaSyApj0HNYssirk2L1qDU56WInzJrIptGoug";
const LANGUAGE = "&Language=pt-BR";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const app = express();

const adresses = [];

app.use(express.json());

app.get("/", async (request, response) => {
  const geolocationURL = await axios(
    `${BASE_URL}94 Rua Fernandes Gusmao, Rio De Janeiro,${LANGUAGE}
    ${API_KEY}`
  );
  return response.json(geolocationURL.data.results[0].geometry.location);
});

app.post("/route", async (request, response) => {
  const { number, street, city, state } = request.body;

  const fullAddress = `${number} ${street}, ${city}, ${state}`;
  const fullAddressEncoded = encodeURI(fullAddress);
  // const geolocationURL = await axios(
  //   `${BASE_URL}${fullAddressEncoded}${LANGUAGE}${API_KEY}`
  // );
  const geolocationURL = await axios(
    `${BASE_URL}${fullAddressEncoded}${LANGUAGE}${API_KEY}`
  );
  const latitude = geolocationURL.data.results[0].geometry.location.lat;
  const longitude = geolocationURL.data.results[0].geometry.location.lng;

  adresses.push({
    fullAddress,
    fullAddressEncoded,
    latitude,
    longitude,
  });
  return response.status(201).send();
  // return response.json(geolocationURL.data.results[0].geometry.location);
});

function calculateDistance() {
  const calc = Math.sqrt(
    (adresses[0].latitude - adresses[0].longitude) ** 2 +
      (adresses[1].latitude - adresses[1].longitude) ** 2
  );

  return calc;
}

app.get("/result", (request, response) => {
  const result = calculateDistance();
  return response.json(result);
});

app.get("/route", async (request, response) => {
  return response.json(adresses);
});

app.listen("3000", () => {
  console.log("Server is running!");
});
