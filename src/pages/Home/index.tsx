import { Theme } from "../../components/SideBarTheme";
import * as C from "./styled";
import { RenderLineChart } from "../../components/ChartsBar";
import { useEffect, useState } from "react";
import { validadeUserToken } from "../../helpers/token";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Home = () => {
  const [Loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem("token");
 const BackLogin = useNavigate()

  useEffect(() => {
    const checkIfIsLogged = async () => {
      if (token) {
        const result = await validadeUserToken.tokenGet();
        if (result.error === "") {
          setLoading(false);
          toast.success('Bem vindo!', {
            duration: 5000,
            position: 'top-center'
          })
          alert(result.error)
        }
      } else {
        // Se não tiver um token voltar pra tela de login
        BackLogin('/login')
      }
    };
    checkIfIsLogged();
  }, []);

  return (
    <>
      {!Loading && (
        <Theme>
          <C.HomeDash>
            <Toaster></Toaster>
            <h2>DASHBOARD</h2>
            <C.CardsMainArea>
              <C.Cards>
                <C.CardContent>45K</C.CardContent>
              </C.Cards>
              <C.Cards>
                <C.CardContent>45K</C.CardContent>
              </C.Cards>
              <C.Cards>
                <C.CardContent>45K</C.CardContent>
              </C.Cards>
              <C.Cards>
                <C.CardContent>45K</C.CardContent>
              </C.Cards>
            </C.CardsMainArea>
            <RenderLineChart />
          </C.HomeDash>
        </Theme>
      )}
    </>
  );
};
