import { Button, message } from "antd";
import useCountDownTimer from "../../customHooks/useCountDownTimer";
import useSendEmailOTP from "../../customHooks/useSendEmailOTP";

const ResendOTPButton = ({ email }) => {
  const [loading, sendEmailOTP] = useSendEmailOTP({ email });
  const [remainingTime, resetTimer] = useCountDownTimer({
    duration: 10 * 1000,
  });

  const resendOTP = async () => {
    const res = await sendEmailOTP();
    if (res?.user) {
      resetTimer();
    } else {
      message.error("Something went wrong");
    }
  };

  return (
    <Button
      loading={loading}
      onClick={resendOTP}
      disabled={remainingTime > 0}
      htmlType="button"
      type="text"
      className="resend-otp-btn mt-5"
    >
      Send OTP again
      {`${
        remainingTime && remainingTime > 0 ? ` (${remainingTime / 1000})` : ""
      }`}
    </Button>
  );
};

export default ResendOTPButton;
