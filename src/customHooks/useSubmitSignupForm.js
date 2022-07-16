import { useState, useCallback } from "react";
import axios from "../axios";

const useSubmitSignupForm = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = useCallback(async ({ userID, name, phone, city }) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/sign-up", {
        userID,
        name,
        phone,
        city,
      });
      return res.data;
    } catch (e) {
      console.log("--- useSubmitSignupForm error");
      console.log(e);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, submitForm];
};

export default useSubmitSignupForm;
