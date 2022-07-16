import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import BackButton from "../../components/BackButton";
import ResendOTPButton from "./ResendOTPButton";
import useOTPSignin from "../../customHooks/useOTPSignin";
import Loading from "../../components/Loading";

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const [otp, setOTP] = useState("");
  const [loading, otpSignin] = useOTPSignin({ otp, email: user.email });

  useEffect(() => {
    if (otp.length !== 4) return;
    const submitOTP = async () => {
      const res = await otpSignin();
      if (!res?.user?.id) {
        message.error("Invalid or expired OTP code");
      } else if (res.user.didRegister) {
        navigate("/", { replace: true });
      } else {
        navigate("/sign-up", { replace: true, state: user });
      }
    };
    submitOTP();
  }, [otp, otpSignin, navigate, user]);

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
        <ResendOTPButton email={user.email} />
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
