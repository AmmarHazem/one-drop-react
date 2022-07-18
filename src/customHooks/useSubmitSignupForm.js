import { useState, useCallback } from "react";
import { submitSignupForm } from "../API/authAPI";

const useSubmitSignupForm = () => {
  const [loading, setLoading] = useState(false);

  const submitSignupFormCallback = useCallback(
    async ({ userID, name, phone, city, neighborhood }) => {
      setLoading(true);
      const res = await submitSignupForm({
        userID,
        name,
        phone,
        city,
        neighborhood,
      });
      setLoading(false);
      return res;
    },
    []
  );

  return [loading, submitSignupFormCallback];
};

export default useSubmitSignupForm;
