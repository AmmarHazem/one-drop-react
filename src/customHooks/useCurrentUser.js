import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../redux/authReducer";
import { setConfigAction } from "../redux/configReducer";
import { getCurrentUser, getEnvVariables } from "../API/userAPI";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const promisesResult = await Promise.all([
        getCurrentUser(),
        getEnvVariables(),
      ]);
      dispatch(setUserAction(promisesResult[0]));
      dispatch(setConfigAction(promisesResult[1]));
      setLoading(false);
    })();
  }, [dispatch]);

  return loading;
};

export default useCurrentUser;
