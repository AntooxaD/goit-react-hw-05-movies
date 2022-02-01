import axios from "axios";
const URL = "https://api.themoviedb.org/3/";

const KEY = "31eeb7843a227fd247daa20511620f3d";

async function fetchPopularFilms() {
  const url = `${URL}trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(url);

  return response.data.results;
}
async function fetchFilmById(id) {
  const url = `${URL}movie/${id}?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data;
}

async function fetchByQuery(query) {
  const url = `${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  const response = await axios.get(url);

  return response.data.results;
}

async function fetchCredits(id) {
  const url = `${URL}movie/${id}/credits?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data.cast;
}
async function fetchRewies(id) {
  const url = `${URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);

  return response.data.results;
}
export {
  fetchPopularFilms,
  fetchFilmById,
  fetchByQuery,
  fetchCredits,
  fetchRewies,
};
