import axios from "../axios";

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
