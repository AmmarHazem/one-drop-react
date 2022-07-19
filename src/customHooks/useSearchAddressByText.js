import { useCallback, useState } from "react";
import { geocodeAddress } from "../API/googleAPI";

const useSearchAddressByText = () => {
  const [loading, setLoading] = useState(false);

  const searchAddressByText = useCallback(async ({ address, latlng }) => {
    setLoading(true);
    const res = await geocodeAddress({ address, latlng });
    setLoading(false);
    return res?.addresses;
  }, []);

  return [loading, searchAddressByText];
};

export default useSearchAddressByText;
