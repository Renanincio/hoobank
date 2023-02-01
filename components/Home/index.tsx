import React from "react";
import {
  HomeContainer,
  HomeContentLeft,
  HomeContentRight,
  HomeFooter,
} from "./styles";

export const HomePage = () => {
  return (
    <>
      <HomeContainer id="home">
        <HomeContentLeft>
          <div className="contentLeft">
            <p className="discount">
              <img src="image/discount.svg" alt="discount" /> <span>20%</span>{" "}
              discount for <span>1 mounth</span> account
            </p>
            <h1>
              The Next
              <br />
              <span>Generation</span>
              <br />
              Payment Method
            </h1>
            <p className="text">
              Our team of exports uss a methodology to identify
              <br /> the credit cards most likely to fit your needs.
              <br /> We examine annual percentage rates, annual fees.
            </p>
          </div>

          <div className="getStarted">
            <p>
              Get
              <img src="/image/arrow-up.svg" alt="arrow Up" />
              <br /> <span>Started</span>
            </p>
          </div>
        </HomeContentLeft>
        <HomeContentRight>
          <img src="/image/robot.png" alt="imagem decorativa de um robo" />
        </HomeContentRight>
      </HomeContainer>

      <HomeFooter>
        <ul>
          <li>
            <h1>3800+</h1>
            <p>user active</p>
          </li>

          <li>
            <h1>230+</h1>
            <p>Trusted by company</p>
          </li>

          <li>
            <h1>$230M+</h1>
            <p>transaction</p>
          </li>
        </ul>
      </HomeFooter>
    </>
  );
};
