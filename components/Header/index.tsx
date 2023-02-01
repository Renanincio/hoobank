import React, { useState } from "react";
import { ContentHeader, Menu, Navigation } from "./styles";
import { BiMenuAltRight } from "react-icons/bi";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <ContentHeader>
        <a href="/" rel="noopener noreferrer">
          <img src="/image/logo.svg" alt="logo" />
        </a>

        <Menu>
          <Navigation sidebar={sideBar}>
            <ul>
              <li>
                <a href="#home" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" rel="noopener noreferrer">
                  Features
                </a>
              </li>
              <li>
                <a href="#product" rel="noopener noreferrer">
                  Product
                </a>
              </li>
              <li>
                <a href="#clients" rel="noopener noreferrer">
                  Clients
                </a>
              </li>
            </ul>
          </Navigation>

          <div>
            <button onClick={showSideBar}>
              <BiMenuAltRight />
            </button>
          </div>
        </Menu>
      </ContentHeader>
    </>
  );
};
