import styled from "styled-components";

export const MainLogin = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: 745px;
`

export const MainLoginContent = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  width: 450px;
  box-shadow: -2px 2px 12px -3px rgba(0,0,0,0.75);
  color: #000;
  justify-content: center;
  overflow-x: hidden;
  align-items: center;
  margin-bottom: 20px;
  height: 400px;
  
  div{
      width: 90%;
      line-height: 12px;
      margin: 0 auto;
  }

  h1{
      margin-bottom: 70px;
  }

`

export const Form  = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormInput = styled.input`
  margin: 0 0 10px 0;
  padding: 10px 0 10px 10px ;
  outline: 0;

`
export const Button = styled.button`
  width: 90%;
  text-align: center;
  color: #FFF;
  font-size: 15px;
  position: relative;
  border: none;
  outline: 0;
  top: 40px;
  height: 50px;
  cursor: pointer;
  background-color: blue;
`