import styled from "styled-components";

export const asideBar = styled.div`
  color: #a7a7a7;
  width: 280px;
  overflow-x: auto;
  height: 100vh;
  background-color: #2A2B36;

  &::-webkit-scrollbar-track{
    background: red;
    border-radius: 9px;
  }
`

export const AsideTitle = styled.div`
  /* text-align: center; */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22222F;
  position: relative;
  /* top: -20px; */
  height: 35px;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;

  img {
    margin: 0 10px 0 0;
  }
`

export const AsideContent = styled.div`
  /* width: 80%; */
  /* flex: 1; */
  overflow-x: auto;
  margin: 0 auto;
  height: auto;

  h4 {
    margin: 20px 0 0 10px;
  }

  a{
    text-decoration: none;
  }

`
export const AsideBarTite = styled.div`
 margin: 40px 0 0 0;
 display: flex;
 cursor: pointer;
 padding: 10px;
 align-items: center;
 font-size: 17px;

 &:hover{
   background-color: #172C6B;
 }
 span {
     margin-left: 20px;
     color: #f5f5f5;
 }
`

export const ThemeAsideMain = styled.div`
  height: auto;
  overflow-x: visible;
  display: flex;
`