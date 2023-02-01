import React from "react";
import { Button } from "../../styles/styledGlobal";
import {
  FeaturesContainer,
  FeaturesContentLeft,
  FeaturesContentRight,
} from "./style";

export const Features = () => {
  return (
    <>
      <FeaturesContainer id="features">
        <FeaturesContentLeft>
          <h1>
            You do the business,
            <br /> we'll handle the money.
          </h1>
          <p>
            With the right credit card, you can improve your financial life by
            <br />
            building credit, earning rewards and saving money. But with
            <br />
            hundreds of credit cards on the market
          </p>
          <Button>Get Started</Button>
        </FeaturesContentLeft>
        <FeaturesContentRight>
          <ul>
            <li>
              <div className="img">
                <img src="/image/Star.svg" alt="star" />
              </div>
              <div className="content">
                <h4>Rewards</h4>

                <p>
                  The best credit cards offer same tantalizing combinations of
                  promotions and prizes.
                </p>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/image/Shield.svg" alt="shield" />
              </div>
              <div className="content">
                <h4>100% Secured</h4>

                <p>
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </li>

            <li>
              <div className="img">
                <img src="/image/Send.svg" alt="Send" />
              </div>
              <div className="content">
                <h4>Balance Transfer</h4>

                <p>
                  A balance transfer credit card can save you a lot of money in
                  interest charges.
                </p>
              </div>
            </li>
          </ul>
        </FeaturesContentRight>
      </FeaturesContainer>
    </>
  );
};
