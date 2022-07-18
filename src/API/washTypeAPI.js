import axios from "../axios";

export const getWashTypes = async () => {
  try {
    const res = await axios.get("/wash-types");
    return res.data.washTypes;
  } catch (e) {
    console.log("--- get wash-types error");
    console.log(e);
    return null;
  }
};
