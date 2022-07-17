import { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import useSendEmailOTP from "../customHooks/useSendEmailOTP";

const SignUpSendEmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, sendEmailOTP] = useSendEmailOTP();

  // console.log({ location });

  const onFormSubmitSuccess = async (value) => {
    const res = await sendEmailOTP({ email });
    if (res?.user) {
      navigate("/otp-verfication", {
        state: { user: res.user, next: location.state?.next },
      });
    } else {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="signup-send-email-verification">
      <header className="d-flex justify-content-end">
        <BackButton />
      </header>
      <main>
        <h2 className="title">Enter your email address</h2>
        <p className="mb-5">Please enter your email to login or sign up</p>
        <Form onFinish={onFormSubmitSuccess}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input
              size="large"
              type="email"
              placeholder="user@email.com"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <div className="d-flex justify-content-center">
            <Button
              loading={loading}
              disabled={!email}
              htmlType="submit"
              className="mt-5"
            >
              Continue
            </Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default SignUpSendEmailVerification;
