import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
   *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scrollbar-width: 5px;
    scrollbar-color: #121212;
    color: #C2C2C9;
  }
  body{
    background-color: #00040F;
  }
  
  p,li{
    line-height: 26px;
  }

  h1{
    color: white;
    font-size: 52px;
  }

  h2{
    color: white;
    font-size: 24px;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
  li{
    list-style: none;
  }
  html{
    scroll-behavior: smooth;
  }
  button{
    border: 0 none;
    cursor: pointer;
  }
  input, textarea{
    border: 0 none;
    outline: none;
  }
  *::-webkit-scrollbar {
     width: 5px;
  }
  *::-webkit-scrollbar-track {
  background-color: none;
  }
  *::-webkit-scrollbar-thumb {
  background-color: #121212;
  border-radius: 30px;
}

@media (max-width: 1080px) {
    h2{
      font-size: 18px;
    }

    h1{
      font-size: 46px;
    }
  }

  @media (max-width: 720px){
    p,li{
      font-size: 12px;
    }
  }

  @media (max-width: 380px){
    p,li{
      font-size: 10px;
    }

    h2{
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  color: black;
  font-weight: bold;
  border-radius: 10px;
  padding: 16px 24px;
  width: max-content;
  background: linear-gradient(
    157.81deg,
    #def9fa -43.27%,
    #bef3f5 -21.24%,
    #9dedf0 12.19%,
    #7de7eb 29.82%,
    #5ce1e6 51.94%,
    #33bbcf 90.29%
  );
`;

export default GlobalStyle;
