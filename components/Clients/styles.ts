import styled from "styled-components";

export const ClientsContainer = styled.section`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;

export const ClientsHeader = styled.header`
  min-height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  p {
    max-width: 450px;
    margin-top: 30px;
  }
`;

export const ClientsContent = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 70px;
  }

  ul li {
    width: 350px;
    height: 400px;
    margin: 17px auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;
  }

  ul li:hover {
    background: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );

    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
  }

  ul li div {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    max-height: 270px;
  }

  ul li div p {
    min-width: 100%;
    margin: 32px 0 19px 0;
  }

  ul li div img {
    width: 42.6px;
    height: 27.6px;
  }

  ul li div .img {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul li div .img img {
    width: 48px;
    height: 48px;
  }

  ul li div .img div {
    margin-left: 12px;
    display: flex;
    justify-content: center;
  }

  ul li div .img div h4 {
    color: white;
    margin: 30px 0 -30px 0;
  }

  @media (max-width: 720px) {
    ul li {
      text-align: center;
    }

    ul li div {
      justify-content: center;
    }

    ul li:hover {
      background: none;
      box-shadow: none;
    }
  }
`;
