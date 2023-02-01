import styled from "styled-components";

export const CTAContainer = styled.section`
  min-height: 70vh;
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
export const CTAContentTop = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  ul li {
    margin: 12px auto;
  }

  ul li img {
    width: 172px;
    height: 60px;
  }
`;

export const CTAContentBottom = styled.div`
  background-color: #34323d;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );

  box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);

  .content {
    display: flex;
    flex-direction: column;
    margin: 110px 0 90px 70px;
  }

  .content h1 {
    margin-bottom: 17px;
  }

  button {
    height: max-content;
    width: max-content;
    margin-right: 70px;
  }

  @media (max-width: 850px) {
    width: 80%;
    margin: 70px auto;
    height: 400px;

    .content {
      text-align: center;
      margin: 0 auto;
    }

    .content h1 {
      max-width: 350px;
    }

    button {
      margin: 0 auto 30px;
    }
  }

  @media (max-width: 720px) {
    background: none;
    box-shadow: none;
  }
`;
