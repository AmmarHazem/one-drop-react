import { useEffect, useState } from "react";
import axios from "../axios";

const useWashTypes = () => {
  const [loading, setLoading] = useState(true);
  const [washTypes, setWashTypes] = useState(null);

  useEffect(() => {
    const getWashTypes = async () => {
      try {
        const res = await axios.get("/api/v1/wash-types");
        setWashTypes(res.data.washTypes);
      } catch (e) {
        console.log("--- get wash-types error");
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getWashTypes();
  }, []);

  return [washTypes, loading];
};

export default useWashTypes;
