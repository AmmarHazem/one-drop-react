import axios from "../axios";

export const getEnvVariables = async () => {
  try {
    const res = await axios.get("/users/env-variables");
    return res.data;
  } catch (e) {
    console.log("--- getEnvVariables error");
    console.log(e);
    return null;
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await axios.get("/users/get-current-user");
    return res.data.user;
  } catch (e) {
    // console.log("--- useCurrentUser error");
    // console.log(e);
    return null;
  }
};
