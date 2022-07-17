import { useState, useCallback } from "react";
import axios from "../axios";

const useOTPSignin = ({ email, otp }) => {
  const [loading, setLoading] = useState(false);

  const otpSignin = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "/auth/otp-sign-in",
        { email, otp }
        // {
        //   withCredentials: true,
        // }
      );
      return res.data;
    } catch (e) {
      console.log("--- useOTPSignin error");
      console.log(e);
      return null;
    } finally {
      setLoading(false);
    }
  }, [email, otp]);

  return [loading, otpSignin];
};

export default useOTPSignin;
