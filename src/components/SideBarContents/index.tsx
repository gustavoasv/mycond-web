import * as C from "./style";
import { AiOutlineWarning } from "react-icons/ai";
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { IoIosNotifications, IoIosDocument } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'

type PropsItems = {
  page: string;
  icon: string | undefined;
};

export const SideBarItems = ({ page, icon }: PropsItems) => {
  return (
    <>
      <C.AsideBarText>
        <C.AsideBarContent>
          {icon === "avisoIcon" && (
            <>
              <AiOutlineWarning color="#f5f5f5" />
              <span>{page}</span>
            </>
          )}
          {icon === "DocIcon" && (
            <>
              <IoIosDocument color="#f5f5f5"/>
              <span>{page}</span>
            </>
          )}
          {icon === "ReservaIcon" && (
            <>
              <BsFillCalendarCheckFill color="#f5f5f5"/>
              <span>{page}</span>
            </>
          )}
          {icon === "OcorrenciasIcon" && (
            <>
              <IoIosNotifications color="#f5f5f5"/>
              <span>{page}</span>
            </>
          )}
          {icon === 'usuarioIcon' &&
          <><FaUserCircle color="#f5f5f5" /><span>{page}</span></>

          }
          {icon === 'logoutIcon' &&
          <>
            <span>{page}</span>
          </>
          }
        </C.AsideBarContent>
      </C.AsideBarText>
    </>
  );
};
