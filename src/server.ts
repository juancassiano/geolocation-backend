import express from "express";
import axios from "axios";

const API_KEY = "AIzaSyApj0HNYssirk2L1qDU56WInzJrIptGoug";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const app = express();
app.use(express.json());

app.get("/", async (request, response) => {
  const { data } = await axios(
    `${BASE_URL}94+Rua+Fernandes+Gusmao,+Rio+De+Janeiro,
    +RJ&Language=pt-BR&key=${API_KEY}`
  );
  return response.json(data.results[0].geometry.location);
  // return response.json({ data.results.geometry.location });
});

app.listen("3000", () => {
  console.log("Server is running!");
});
