import { useState, useCallback } from "react";
import axios from "../axios";

const useSendEmailOTP = () => {
  const [loading, setLoading] = useState(false);

  const sendEmailOTP = useCallback(async ({ email }) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/send-email-otp", { email });
      return res.data;
    } catch (e) {
      console.log("--- useSendEmailOTP error");
      console.log(e);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, sendEmailOTP];
};

export default useSendEmailOTP;
