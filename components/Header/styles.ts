import styled from "styled-components";

type MenuVisible = {
  sidebar: boolean;
};

export const ContentHeader = styled.header`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #c2c2c9;

  img {
    width: 124px;
    height: 34px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  div button {
    display: none;
  }

  @media (max-width: 720px) {
    div button {
      display: flex;
      font-size: 24px;
      background-color: transparent;
      color: white;
    }
  }
`;

export const Navigation = styled.nav<MenuVisible>`
  display: flex;

  ul {
    display: flex;
  }

  ul li {
    margin-right: 12px;
    transition: all 0.2s;
    cursor: pointer;
  }

  ul li a:hover {
    color: white;
  }

  @media (max-width: 720px) {
    height: 100%;
    position: fixed;
    top: ${(props) => (props.sidebar ? "0" : "-100%")};
    left: 0;
    transition: 0.8s;
    background: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );

    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);

    ul {
      flex-direction: column;
      padding: 35px;
    }

    ul li {
      padding: 22px 0;
    }
  }
`;
