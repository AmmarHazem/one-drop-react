import { useState, useEffect } from "react";
import { getEnvVariables } from "../API/userAPI";

const useGetEnvVariables = () => {
  const [loading, setLoading] = useState(true);
  const [envVars, setEnvVars] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getEnvVariables();
      setLoading(false);
      setEnvVars(res);
    })();
  }, []);

  return [loading, envVars];
};

export default useGetEnvVariables;
