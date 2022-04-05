import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast, Toaster } from "react-hot-toast";
import * as C from "./styled";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(false);
  const goDashboard = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      const request = await api.post("/auth/login", { email, password });
      const data = request.data;
      setLoading(false);
      if (data.error === "") {
        localStorage.setItem("token", data.token);
        goDashboard("/");
      } else {
        toast.error(data.error, {
          duration: 5000,
          position: "top-center",
          style: {
            backgroundColor: "red",
            color: "#FFF",
          },
        });
      }
    } else {
      toast.error("Prencha os campos!", {
        duration: 5000,
        position: "top-center",
        style: {
          backgroundColor: "red",
          color: "#FFF",
        },
      });
    }
  };

  return (
    <C.MainLogin>
      <Toaster />
      <C.MainLoginContent>
        <div>
          <h1>Entrar</h1>
          <C.Form>
            <C.FormInput
              placeholder="digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></C.FormInput>
            <C.FormInput
              type="password"
              placeholder="digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></C.FormInput>
          </C.Form>
          <C.Button onClick={handleLogin}>
            {Loading === false ? "Entrar no sistema" : "Carregando..."}
          </C.Button>
        </div>
      </C.MainLoginContent>
    </C.MainLogin>
  );
};
