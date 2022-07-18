import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import { useDispatch } from "react-redux";
import BackButton from "../../components/BackButton";
import ResendOTPButton from "./ResendOTPButton";
import useOTPSignin from "../../customHooks/useOTPSignin";
import Loading from "../../components/Loading";
import { setUserAction } from "../../redux/authReducer";

const OTPVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, next } = location.state || {};
  const [otp, setOTP] = useState("");
  const [loading, otpSignin] = useOTPSignin();

  const handleLoginSuccess = useCallback(
    (res) => {
      dispatch(setUserAction(res.user));
      let nextPath;
      if (next?.pathname) {
        nextPath = next?.pathname;
      } else {
        nextPath = "/";
      }
      navigate(nextPath, { replace: true });
    },
    [dispatch, navigate, next]
  );

  useEffect(() => {
    if (otp.length !== 4) return;
    const submitOTP = async () => {
      const res = await otpSignin({ otp, email: user.email });
      if (!res?.user?.id) {
        message.error("Invalid or expired OTP code");
      } else if (res.user.didRegister) {
        handleLoginSuccess(res);
      } else {
        navigate("/sign-up", { replace: true, state: { user, next } });
      }
    };
    submitOTP();
  }, [otp, otpSignin, navigate, user, dispatch, handleLoginSuccess, next]);

  let content;
  if (!user?.id) {
    content = <h2 className="title">Something went wrong</h2>;
  } else {
    content = (
      <>
        <h2 className="title">Enter your OTP</h2>
        <p className="mb-5">
          Please enter the OTP sent to you on <strong>{user.email}</strong>
        </p>
        <Input
          value={otp}
          onChange={(e) => {
            if (e.target.value.length > 4) return;
            setOTP(e.target.value);
          }}
          className="otp-input"
          maxLength={4}
          size="large"
          type="number"
          name="otp"
          autoFocus
        />
        <div className="d-flex justify-content-center">
          <ResendOTPButton email={user.email} />
        </div>
      </>
    );
  }

  if (loading) {
    content = <Loading>{content}</Loading>;
  }

  return (
    <div className="otp-verification">
      <header className="d-flex justify-content-end">
        <BackButton />
      </header>
      <main>{content}</main>
    </div>
  );
};

export default OTPVerification;
