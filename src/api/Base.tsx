
import axios from "axios";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "372c4d961fee7e424574dda7480935db"
  }
});