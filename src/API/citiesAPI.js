import axios from "../axios";

export const getCities = async () => {
  try {
    const res = await axios.get("/cities");
    return res.data.cities;
  } catch (e) {
    console.log("--- getCities error");
    console.log(e);
    return null;
  }
};
