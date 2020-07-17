import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: auto;
  background-color: #3b3762;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px 0;
  border-radius: 28px 6px;
`;

export const FieldContainer = styled.div`
  width: 95%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 90%;
    height: 130px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;

      color: #f1f1f1;
      font-weight: bold;

      @media (max-width: 613px) {
        font-size: 14px;
      }
    }

    select {
      width: 140px;
      height: 50px;
      text-align: center;
      font-size: 18px;
      border: none;
      opacity: 1;
      transition: 0.4s;
      background-color: #dfdfdf;
      text-align: center;
      text-align-last: center;

      :hover {
        opacity: 0.7;
      }
    }

    input {
      width: 140px;
      height: 50px;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;

      background-color: #dfdfdf;
    }
  }

  @media (max-width: 1045px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
  }
`;

export const ResultContainer = styled.div`
  width: 95%;
  height: max-content;
  min-height: 100px;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 28px 6px;
  background-color: #4f4983;

  button {
    width: 40%;
    height: 60px;
    border-radius: 20px;
    background-color: #f5d6e2;
    border: none;
    margin: 0 10px;

    font-size: 22px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

    transition: 0.7s;

    :hover {
      background-color: #ebadc6;
      font-size: 26px;
    }

    @media (max-width: 1045px) {
      width: 90%;
      margin-bottom: 20px;
    }
  }

  div {
    width: 260px;
    height: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #f6f6f6;

    span {
      font-size: 22px;
      margin-bottom: 5px;
    }
    strong {
      font-size: 24px;
    }

    @media (max-width: 1045px) {
      margin-bottom: 25px;
    }
  }

  div:last-child {
    color: #27b36d;
  }

  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;
