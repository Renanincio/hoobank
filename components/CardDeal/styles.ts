import styled from "styled-components";

export const CardDealContainer = styled.section`
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;
  min-height: 100vh;
`;

export const CardDealContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 170px;
  }

  p {
    margin: 27px 0 43px 0;
    width: 100%;
    max-width: 470px;
  }

  @media (max-width: 850px) {
    margin: 0 auto;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

export const CardDealContentRight = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 450px;
    height: 400px;
  }

  @media (max-width: 1080px) {
    margin: 120px auto 0;

    img {
      width: 350px;
      height: 300px;
    }
  }

  @media (max-width: 720px) {
    img {
      width: 270px;
      height: 300px;
    }
  }
`;
