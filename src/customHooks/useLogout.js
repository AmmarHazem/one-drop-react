import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAction } from "../redux/authReducer";
import axios from "../axios";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logout = useCallback(() => {
    setLoading(true);
    try {
      navigate("/");
      axios.post("/auth/logout");
      dispatch(setUserAction(null));
    } catch (e) {
      console.log("--- useLogout error");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [dispatch, navigate]);

  return [loading, logout];
};

export default useLogout;
