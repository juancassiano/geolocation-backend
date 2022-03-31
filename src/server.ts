import express from "express";
import axios from "axios";

const API_KEY = "&key=AIzaSyApj0HNYssirk2L1qDU56WInzJrIptGoug";
const LANGUAGE = "&Language=pt-BR";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const app = express();

const geolocations = [];
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
  const { number, address, city, state } = request.body;

  const fullAddress = `${number} ${address}, ${city}, ${state}`;

  const geolocationURL = await axios(
    `${BASE_URL}${fullAddress}${LANGUAGE}${API_KEY}`
  );

  adresses.push(fullAddress);
  return response.json(geolocationURL.data.results[0].geometry.location);
});

app.get("/route", async (request, response) => {
  return response.json(adresses);
});

app.listen("3000", () => {
  console.log("Server is running!");
});
