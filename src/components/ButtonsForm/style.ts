import styled from "styled-components";

interface Props {
   name: string
}

export const Button = styled.button<Props>`
  width: auto;
  padding: 10px;
  font-size: 17px;
  cursor: pointer;
  height: auto;
  color: #FFF;
  margin: 0 10px 0 0;
  border-radius: 5px;
  border: 0;
  background-color: ${props => props.name === 'Excluir' ? 'red' : 'blue'};
`