import { useState, useCallback } from "react";
import { otpSignin } from "../API/authAPI";

const useOTPSignin = () => {
  const [loading, setLoading] = useState(false);

  const otpSigninCallback = useCallback(async ({ email, otp }) => {
    setLoading(true);
    const res = await otpSignin({ email, otp });
    setLoading(false);
    return res;
  }, []);

  return [loading, otpSigninCallback];
};

export default useOTPSignin;
