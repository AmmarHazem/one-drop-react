import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../redux/authReducer";
import { getCurrentUser } from "../API/userAPI";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getCurrentUser();
      dispatch(setUserAction(res));
      setLoading(false);
    })();
  }, [dispatch]);

  return loading;
};

export default useCurrentUser;
