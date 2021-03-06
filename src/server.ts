import express from "express";
import axios from "axios";

const API_KEY = "&key=AIzaSyApj0HNYssirk2L1qDU56WInzJrIptGoug";
const LANGUAGE = "&Language=pt-BR";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const app = express();

const adresses:
  | {
      fullAddress: string;
      latitude: number;
      longitude: number;
    }[] = [];

const results: {
  result: string;
  distance: number;
  adress1: string;
  adress2: string;
}[] = [];

app.use(express.json());

app.post("/route", async (request, response) => {
  const { number, street, city, state } = request.body;

  const fullAddress = `${number} ${street}, ${city}, ${state}`;
  const fullAddressEncoded = encodeURI(fullAddress);

  const geolocationURL = await axios(
    `${BASE_URL}${fullAddressEncoded}${LANGUAGE}${API_KEY}`
  );
  const latitude = geolocationURL.data.results[0].geometry.location.lat;
  const longitude = geolocationURL.data.results[0].geometry.location.lng;

  adresses.push({
    fullAddress,
    latitude,
    longitude,
  });
  return response.status(201).send();
});

function calculateDistance() {
  for (let i = 0; i < adresses.length; i++) {
    for (let j = 0; j < i; j++) {
      let distance = Math.sqrt(
        (adresses[j].latitude - adresses[j].longitude) ** 2 +
          (adresses[i].latitude - adresses[i].longitude) ** 2
      );

      let adress1 = adresses[j];
      let adress2 = adresses[i];
      let result = `Distância do endereço ${adresses[j].fullAddress} para o endereço ${adresses[i].fullAddress} é de ${distance}`;
      results.push({
        result,
        distance,
        adress1,
        adress2,
      });

      results.sort((a, b) => a.distance - b.distance);
    }
  }
}

app.get("/result", (request, response) => {
  calculateDistance();
  return response.json({ results });
});

app.get("/route", async (request, response) => {
  return response.json(adresses);
});

app.listen("3000", () => {
  console.log("Server is running!");
});
