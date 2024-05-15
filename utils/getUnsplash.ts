import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
});

export const getUnsplashImage = async () => {
  try {
    const { data } = await unsplash.get(
      "/search/photos?page=1&query=apple-products"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
