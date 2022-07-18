import { useEffect, useState } from "react";
import { getWashTypes } from "../API/washTypeAPI";

const useWashTypes = () => {
  const [loading, setLoading] = useState(true);
  const [washTypes, setWashTypes] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getWashTypes();
      setLoading(false);
      setWashTypes(res);
    })();
  }, []);

  return [washTypes, loading];
};

export default useWashTypes;
