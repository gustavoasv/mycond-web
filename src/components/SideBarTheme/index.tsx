import * as C from "./style";
import { BiDoughnutChart } from "react-icons/bi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/condominio.png";
import { SideBarItems } from "../SideBarContents";
import { AiOutlineWarning } from "react-icons/ai";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <C.ThemeAsideMain>
      <C.asideBar>
        <C.AsideTitle>
          <img src={Logo} width={40}></img>
          MYCOND
        </C.AsideTitle>
        <C.AsideContent>
          <C.AsideBarTite>
            <Link to="/">
              <BiDoughnutChart width={20} color="f5f5f5" />
              <span>DashBoard</span>
            </Link>
          </C.AsideBarTite>
          <h4>GESTAO</h4>
          <Link to="/avisos">
            <SideBarItems page="Avisos" icon="avisoIcon"></SideBarItems>
          </Link>
          <Link to="/docuemntos">
            <SideBarItems page="Documentos" icon="DocIcon"></SideBarItems>
          </Link>
          <Link to="/reservas">
            <SideBarItems page="Reservas" icon="ReservaIcon"></SideBarItems>
          </Link>
          <Link to="/ocorrencias">
            <SideBarItems
              page="Ocorrencias"
              icon="OcorrenciasIcon"
            ></SideBarItems>
          </Link>
          <Link to="/achados">
            <SideBarItems
              page="Achados e perdidos"
              icon="avisoIcon"
            ></SideBarItems>
          </Link>
          <h4>DADOS</h4>
          <Link to="/avisos">
            <SideBarItems page="Usuarios" icon="usuarioIcon"></SideBarItems>
          </Link>
          <Link to="/docuemntos">
            <SideBarItems page="Unidades" icon="DocIcon"></SideBarItems>
          </Link>
          <Link to="/reservas">
            <SideBarItems page="Areas comuns" icon="ReservaIcon"></SideBarItems>
          </Link>
          <h4>CONFIGURAÇÔES</h4>
          <Link to="/logout">
            <SideBarItems page="Sair" icon="logoutIcon"></SideBarItems>
          </Link>
        </C.AsideContent>
      </C.asideBar>
      {children}
    </C.ThemeAsideMain>
  );
};
