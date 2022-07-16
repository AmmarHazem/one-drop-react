import { useState, useEffect } from "react";
import axios from "../axios";

const useCities = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const res = await axios.get("/cities");
        setCities(res.data.cities);
      } catch (e) {
        console.log("--- useCities error");
        console.log(e);
        setCities(null);
      } finally {
        setLoading(false);
      }
    };
    getCities();
  }, []);

  return [loading, cities];
};

export default useCities;
