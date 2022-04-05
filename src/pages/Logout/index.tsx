import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Logout = (): null => {
  const getToken: any = localStorage.getItem("token");
  const goLogin = useNavigate();

  useEffect(() => {
    const goLogout = async () => {
      const token: any = localStorage.getItem("token");
      api.post("/auth/logout", {}, token);
      localStorage.removeItem("token");
      goLogin("/login");
    };
    goLogout();
  }, []);

  return null;
};
