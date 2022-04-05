import styled from "styled-components";

export const MainForm = styled.div`
  margin: 30px auto;
  div {
    padding: 30px;
    width: 75vw;
    margin: 0 auto;
    background-color: #fff;

    .buttomModal {
      width: auto;
      font-size: 17px;
      padding: 10px;
      cursor: pointer;
      height: 40px;
      color: #fff;
      border-radius: 5px;
      border: 0;
      background-color: blue;
    }
  }
`;

export const TableMain = styled.table`
  width: 100%;
`;
export const TableRow = styled.table`
  /* border: 1px solid #b3adad; */
  border-collapse: collapse;
  padding: 8px;
`;

export const TableHead = styled.th`
  border-bottom: 1px solid #b3adad;
  padding: 8px;
  background: #f0f0f0;
  color: #313030;
`;

export const TableBody = styled.td`
  border-bottom: 1px solid #b3adad;

  text-align: center;
  padding: 8px;
  background: #ffffff;
  color: #313030;

  .excluirButton {
    width: auto;
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
    height: auto;
    color: #fff;
    margin: 0 10px 0 0;
    border-radius: 5px;
    border: 0;
    background-color: red;
  }
  .editButton {
    width: auto;
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
    height: auto;
    color: #fff;
    margin: 0 10px 0 0;
    border-radius: 5px;
    border: 0;
    background-color: blue;
  }
`;

export const InputModal = styled.input`
  width: 90%;
  padding: 10px 0 10px 0;
`