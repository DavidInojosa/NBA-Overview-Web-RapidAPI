import axios from "axios";

const api = axios.create({
  baseURL: "https://free-nba.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "4bfa286620mshff2d9a9870fc899p1298f1jsn61b8174e8e5f",
  },
});

export default api;
