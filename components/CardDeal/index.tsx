import React from "react";
import { Button } from "../../styles/styledGlobal";
import {
  CardDealContainer,
  CardDealContentLeft,
  CardDealContentRight,
} from "./styles";

export const CardDeal = () => {
  return (
    <>
      <CardDealContainer>
        <CardDealContentLeft>
          <h1>
            Find a better card deal <br /> in few easy steps.
          </h1>

          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <Button>Get Started</Button>
        </CardDealContentLeft>

        <CardDealContentRight>
          <img src="/image/card.png"  alt="card image"/>
        </CardDealContentRight>
      </CardDealContainer>
    </>
  );
};
