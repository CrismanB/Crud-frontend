import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

const type = {
  confirm: "#4482D3",
  cancel: "#E05A5A",
  create: "#26AF70",
};

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const List = styled.div`
  width: 65%;
  max-height: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dbdbdb;
  padding: 20px;
  overflow: auto;
  border-radius: 16px;
  position: absolute;
  top: 100px;

  header {
    width: 95%;
    display: flex;
    justify-content: space-between;

    h1 {
      color: #3b3762;
      font-family: "Anton", sans-serif;
      font-size: 36px;
      letter-spacing: 2px;

      @media (max-width: 620px) {
        font-size: 26px;
      }

      @media (max-width: 520px) {
        font-size: 23px;
      }
    }
  }

  div {
    width: 100%;
    overflow-x: auto;
  }

  @media (max-width: 455px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const TableUsers = styled.table`
  table-layout: auto;
  width: 100%;
  margin-top: 20px;
  background-color: #bdbdbd;
  border-collapse: collapse;
  font-family: "Roboto", sans-serif;

  th {
    height: 20px;
  }

  td {
    height: 50px;
    text-align: center;
    white-space: nowrap;
    background-color: #dbdbdb;
    border-bottom: 1px solid #bdbdbd;
  }

  td:first-child {
    width: 30%;
  }

  td:first-child + td {
    width: 30%;
  }

  td:first-child + td + td {
    width: 20%;
  }

  td:first-child + td + td + td {
    justify-content: center;

    width: 20%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const CreateUserButton = styled(Link)`
  padding: 30px 120px;
  background-color: #217d8e;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  color: #fff;
  font-size: 30px;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
  margin: 5px;
   background-color: ${(props) => type[props.themeColor]};  
  color: #fff;
  font-weight: bold;
  transition: 0.4s;
  width: auto;
  

  :hover {
       background-color: ${(props) => darken(0.2, type[props.themeColor])}};   
  }
`;
