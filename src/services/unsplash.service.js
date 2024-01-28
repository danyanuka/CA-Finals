import axios from "axios";

export const unsplashService = { getUnsplashList30 };

const COLLECTION_URL = `https://api.unsplash.com/collections/2091539/photos?client_id=y4HxnqCIkXZlpPc_e5YJfDCwXDLndEpoO4UjdORHtaU&orientation=landscape&w=1920&page=2`;
const COLLECTION_URL2 = `https://api.unsplash.com/collections/l6GSRgLvoZc/photos?client_id=y4HxnqCIkXZlpPc_e5YJfDCwXDLndEpoO4UjdORHtaU&page=4&orientation=landscape`;

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
