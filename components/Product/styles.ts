import styled from "styled-components";

export const ProductContainer = styled.section`
  max-width: 1170px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductContentLeft = styled.div`
  img {
    width: 550px;
    height: 500px;
  }

  @media (max-width: 1080px) {
    margin: 0 auto;

    img {
      width: 450px;
      height: 400px;
    }
  }

  @media (max-width: 720px) {
    img {
      width: 270px;
      height: 300px;
    }
  }
`;

export const ProductContentRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 70px 0 30px 0;
  }

  p {
    max-width: 470px;
  }

  div {
    margin-top: 20px;
  }

  div img {
    margin-right: 7px;
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    margin: 0 auto;
    text-align: center;
  }
`;
