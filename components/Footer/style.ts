import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: max-content;
  width: 100%;
  margin: 150px auto 0;
  display: flex;
  flex-direction: column;
  background-color: #06080d;
`;

export const FooterContentTop = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid white;

  div {
    display: flex;
    flex-direction: column;
  }

  div img {
    margin: 0 0 40px;
  }

  div p {
    margin-left: 22px;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul h4 {
    color: white;
    margin-bottom: 26px;
  }

  ul li {
    margin-bottom: 14px;
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    flex-wrap: wrap;

    ul {
      margin: 12px auto;
    }
  }

  @media (max-width: 720px) {
    div {
      margin: 0 auto;
      text-align: center;
      align-items: center;
    }

    div img {
      width: 120px;
    }
  }
`;

export const FooterContentBottom = styled.div`
  width: 100%;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 22px;
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 27px;
  }

  ul li {
    margin: 0 11px;
    cursor: pointer;
  }
`;
