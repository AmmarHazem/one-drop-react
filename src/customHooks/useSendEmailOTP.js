import { useState, useCallback } from "react";
import { sendEmailOTP } from "../API/authAPI";

const useSendEmailOTP = () => {
  const [loading, setLoading] = useState(false);

  const sendEmailOTPCallback = useCallback(async ({ email }) => {
    setLoading(true);
    const res = await sendEmailOTP({ email });
    setLoading(false);
    return res;
  }, []);

  return [loading, sendEmailOTPCallback];
};

export default useSendEmailOTP;
