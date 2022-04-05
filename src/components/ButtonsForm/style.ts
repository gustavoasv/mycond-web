import styled from "styled-components";

interface Props {
   name: string
}

export const Button = styled.button<Props>`
  width: 120px;
  font-size: 17px;
  cursor: pointer;
  height: 40px;
  color: #FFF;
  border-radius: 5px;
  border: 0;
  background-color: ${props => props.name === 'Excluir' ? 'red' : 'blue'};
`