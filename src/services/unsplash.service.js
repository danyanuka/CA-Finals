import axios from "axios";

export const unsplashService = { getUnsplashList30 };

const BASE_URL_RANDOM =
  "https://api.unsplash.com/photos/random?client_id=y4HxnqCIkXZlpPc_e5YJfDCwXDLndEpoO4UjdORHtaU&count=30";

const COLLECTION_URL = `https://api.unsplash.com/collections/2595483/photos?client_id=y4HxnqCIkXZlpPc_e5YJfDCwXDLndEpoO4UjdORHtaU&page=1`;

async function getUnsplashList30() {
  try {
    const response = await axios.get(COLLECTION_URL);
    const photoData = response.data;
    return photoData;
  } catch (err) {
    console.error("Error fetching photo:", err);
    throw err;
  }
}
