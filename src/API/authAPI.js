import axios from "../axios";

export const submitSignupForm = async ({
  userID,
  name,
  phone,
  city,
  neighborhood,
}) => {
  try {
    const res = await axios.post("/auth/sign-up", {
      userID,
      name,
      phone,
      city,
      neighborhood,
    });
    return res.data;
  } catch (e) {
    console.log("--- useSubmitSignupForm error");
    console.log(e);
    return null;
  }
};

export const otpSignin = async ({ email, otp }) => {
  try {
    const res = await axios.post("/auth/otp-sign-in", { email, otp });
    return res.data;
  } catch (e) {
    console.log("--- otpSignin error");
    console.log(e);
    return null;
  }
};

export const sendEmailOTP = async ({ email }) => {
  try {
    const res = await axios.post("/auth/send-email-otp", { email });
    return res.data;
  } catch (e) {
    console.log("--- sendEmailOTP error");
    console.log(e);
    return null;
  }
};
