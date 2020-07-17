import styled from "styled-components";
import { darken } from "polished";

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

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dbdbdb;
  padding: 20px;
  overflow: auto;
  border-radius: 16px;

  header {
    width: 95%;
    display: flex;
    justify-content: center;

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

  form {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 25px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-size: 16px;
        font-weight: bold;
        margin-left: 5px;
      }

      input {
        height: 35px;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        margin-bottom: 10px;
        padding-left: 10px;
      }
    }

    div:last-child {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 455px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 25px;
  margin: 5px;
  text-align:center;
  border: none;
   background-color: ${(props) => type[props.themeColor]}; 
  color: #fff;
  font-weight: bold;
  transition: 0.4s;
  width: 100%;
  

  :hover {
     background-color: ${(props) => darken(0.2, type[props.themeColor])}}; 
  }
`;
