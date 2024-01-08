import axios from "axios";

export const unsplashService = { getUnsplashList30 };

const BASE_URL =
  "https://api.unsplash.com/photos/random?client_id=y4HxnqCIkXZlpPc_e5YJfDCwXDLndEpoO4UjdORHtaU&count=2";

async function getUnsplashList30() {
  try {
    const response = await axios.get(BASE_URL);
    const photoData = response.data;
    return photoData;
  } catch (err) {
    console.error("Error fetching photo:", err);
    throw err;
  }
}
