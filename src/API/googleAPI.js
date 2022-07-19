import axios from "../axios";

export const geocodeAddress = async ({ address, latlng }) => {
  try {
    const res = await axios.get("/users/geocode-address", {
      params: {
        address,
        latlng,
      },
    });
    return res.data;
  } catch (e) {
    console.log("--- geocodeAddress error");
    console.log(e);
    return null;
  }
};
