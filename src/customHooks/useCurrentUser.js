import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "../redux/authReducer";

import axios from "../axios";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axios.get("/users/get-current-user");
        dispatch(setUserAction(res.data.user));
        // console.log("--- current user", res.data.user);
      } catch (e) {
        // console.log("--- useCurrentUser error");
        // console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();
  }, [dispatch]);

  return loading;
};

export default useCurrentUser;
