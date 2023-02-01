import React from "react";
import {
  ProductContainer,
  ProductContentLeft,
  ProductContentRight,
} from "./styles";

export const Product = () => {
  return (
    <>
      <ProductContainer>
        <ProductContentLeft id="product">
          <img src="/image/bill.png" alt="billing" />
        </ProductContentLeft>
        <ProductContentRight>
          <h1>
            Easily control your <br /> billing & invoicing
          </h1>

          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div>
            <img src="/image/apple.svg" alt="apple logo" />
            <img src="/image/google.svg" alt="google play store logo" />
          </div>
        </ProductContentRight>
      </ProductContainer>
    </>
  );
};
