import { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import useCities from "../customHooks/useCities";
import Loading from "../components/Loading";
import useSubmitSignupForm from "../customHooks/useSubmitSignupForm";

const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  const [loadingFormSubmit, submitForm] = useSubmitSignupForm();
  const [loading, cities] = useCities();
  const [enableContinueButton, setEnableContinueButton] = useState(false);

  const onFormValuesChanged = (changedValues, allValues) => {
    const shouldEnabledButton =
      allValues.city &&
      allValues.name &&
      allValues.phone &&
      allValues.neighborhood;
    if (shouldEnabledButton && !enableContinueButton) {
      setEnableContinueButton(true);
    } else if (!shouldEnabledButton && enableContinueButton) {
      setEnableContinueButton(false);
    }
  };

  const onSubmitForm = async (values) => {
    const city = cities.find((item) => item._id === values.city);
    const res = await submitForm({
      userID: user.id,
      name: values.name,
      phone: values.phone,
      city,
    });
    if (res?.user?.didRegister) {
      message.success("You signed up successfully");
      navigate("/", { replace: true });
    } else {
      message.error("Something went wrong");
    }
  };

  let content;
  if (!user?.id) {
    content = <h3>Something went wrong</h3>;
  } else if (loading) {
    content = (
      <div className="d-flex justify-content-center align-items-center">
        <Loading size={50} />
      </div>
    );
  } else if (!cities) {
    content = <h3>Something went wrong</h3>;
  } else {
    content = (
      <Form
        onFinish={onSubmitForm}
        onValuesChange={onFormValuesChanged}
        size="large"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
          ]}
        >
          <Input placeholder="Phone Number" type="number" />
        </Form.Item>
        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: "Please select your city",
            },
          ]}
        >
          <Select
            filterOption={(value, option) => {
              return option.children
                .toString()
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase());
            }}
            showSearch
            placeholder="City"
          >
            {cities.map((item) => {
              return (
                <Select.Option value={item._id} key={item._id}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="neighborhood"
          rules={[
            {
              required: true,
              message: "Please enter your neighborhood name",
            },
          ]}
        >
          <Input placeholder="Neighborhood" />
        </Form.Item>
        <div className="d-flex justify-content-center">
          <Button
            loading={loadingFormSubmit}
            disabled={!enableContinueButton}
            type="primary"
            htmlType="submit"
          >
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <div className="sign-up-form">
      <header className="d-flex justify-content-end">
        <BackButton />
      </header>
      <h2 className="title">Sign Up</h2>
      <main>{content}</main>
    </div>
  );
};

export default SignUpForm;
