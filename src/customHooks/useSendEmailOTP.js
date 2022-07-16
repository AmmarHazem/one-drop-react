import { useState, useCallback } from "react";
import axios from "../axios";

const useSendEmailOTP = ({ email }) => {
  const [loading, setLoading] = useState(false);

  const sendEmailOTP = useCallback(async () => {
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
  }, [email]);

  return [loading, sendEmailOTP];
};

export default useSendEmailOTP;
