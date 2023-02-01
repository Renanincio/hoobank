import styled from "styled-components";

export const FeaturesContainer = styled.section`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FeaturesContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 37px 0px;
  }

  @media (max-width: 964px) {
    text-align: center;
    margin: 0 auto;

    button {
      margin: 0 auto;
    }
  }
`;

export const FeaturesContentRight = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
  }

  ul li {
    display: flex;
    align-items: center;
    margin: 20px 0px;
    padding: 19px 14px;
    border-radius: 13px;
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

  ul li .img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #01131a;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  ul li .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 9px;
    width: 350px;
  }

  @media (max-width: 964px) {
    ul {
      flex-wrap: wrap;
      flex-direction: row;
    }

    ul li {
      margin: 17px auto;
    }
  }

  @media (max-width: 720px) {
    ul li {
      flex-direction: column;
      width: 80%;
      text-align: center;
      justify-content: center;
    }

    ul li:hover {
      background: none;
      box-shadow: none;
    }

    ul li .content {
      text-align: center;
      width: 100%;
    }
  }
`;
