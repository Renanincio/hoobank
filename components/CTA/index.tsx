import React from "react";
import { Button } from "../../styles/styledGlobal";
import { CTAContainer, CTAContentBottom, CTAContentTop } from "./style";

export const CTA = () => {
  return (
    <>
      <CTAContainer>
        <CTAContentTop>
          <ul>
            <li>
              <img src="/image/airbnb.png" />
            </li>
            <li>
              <img src="/image/binance.png" />
            </li>
            <li>
              <img src="/image/coinbase.png" />
            </li>
            <li>
              <img src="/image/dropbox.png" />
            </li>
          </ul>
        </CTAContentTop>
        <CTAContentBottom>
          <div className="content">
            <h1>Let’s try our service now!</h1>
            <p>
              Everything you need to accept card payments
              <br /> and grow your business anywhere on the planet.
            </p>
          </div>
          <Button>Get Started</Button>
        </CTAContentBottom>
      </CTAContainer>
    </>
  );
};
