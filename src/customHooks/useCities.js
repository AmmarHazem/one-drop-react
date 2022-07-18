import { useState, useEffect } from "react";
import { getCities } from "../API/citiesAPI";

const useCities = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCities();
      setLoading(false);
      setCities(res);
    })();
  }, []);

  return [loading, cities];
};

export default useCities;
