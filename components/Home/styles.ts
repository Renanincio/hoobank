import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 0;
  padding: 24px 0;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const HomeContentLeft = styled.div`
  display: flex;
  margin-top: 70px;

  .contentLeft {
    position: absolute;
  }

  .discount {
    background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
    width: max-content;
    padding: 7px 17px;
    margin: 20px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .discount img {
    width: 32px;
    height: 32px;
  }

  .discount span {
    color: white;
    margin: 0px 7px;
  }

  h1 {
    font-size: 72px;
  }

  h1 span {
    background: radial-gradient(
      64.18% 64.18% at 71.16% 35.69%,
      #def9fa 0.89%,
      #bef3f5 17.23%,
      #9dedf0 42.04%,
      #7de7eb 55.12%,
      #5ce1e6 71.54%,
      #33bbcf 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text {
    margin-top: 25px;
  }

  .getStarted {
    color: #c2c2c9;
    border-radius: 50%;
    border: 3px #c2c2c9 solid;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 70px 0px 0px 410px;
    cursor: pointer;
  }

  .getStarted span {
    background: radial-gradient(
      64.18% 64.18% at 71.16% 35.69%,
      #def9fa 0.89%,
      #bef3f5 17.23%,
      #9dedf0 42.04%,
      #7de7eb 55.12%,
      #5ce1e6 71.54%,
      #33bbcf 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .getStarted img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 1170px) {
    h1 {
      font-size: 52px;
    }
  }

  @media (max-width: 1080px) {
    h1 {
      font-size: 46px;
    }

    .getStarted {
      width: 120px;
      height: 120px;
      margin: 70px 0px 0px 330px;
    }

    .getStarted img {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 910px) {
    flex-direction: column;

    .contentLeft,
    .getStarted {
      position: static;
    }

    .getStarted {
      margin: 70px 0px 0px 190px;
    }
  }

  @media (max-width: 720px) {
    .discount {
      margin: 35px auto;
    }

    .contentLeft {
      text-align: center;
      margin: 35px auto;
    }

    .getStarted {
      margin: 0 auto;
    }
  }
`;

export const HomeContentRight = styled.div`
  position: relative;
  margin: 40px 0;
  max-height: 100%;

  img {
    width: 540px;
    height: 490px;
    z-index: 5;
  }

  @media (max-width: 1080px) {
    img {
      width: 450px;
      height: 400px;
    }
  }

  @media (max-width: 910px) {
    img {
      width: 370px;
      height: 400px;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    margin: 35px 0;

    img {
      width: 270px;
      height: 300px;
    }
  }
`;

export const HomeFooter = styled.footer`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul li {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin: 17px auto;
  }

  ul li h1 {
    margin-right: 25px;
  }

  ul li p {
    background: radial-gradient(
      64.18% 64.18% at 71.16% 35.69%,
      #def9fa 0.89%,
      #bef3f5 17.23%,
      #9dedf0 42.04%,
      #7de7eb 55.12%,
      #5ce1e6 71.54%,
      #33bbcf 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 720px) {
    ul {
      flex-direction: column;
    }

    ul li {
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column;
    }

    ul li h1,
    p {
      margin: 0 auto;
    }
  }
`;
