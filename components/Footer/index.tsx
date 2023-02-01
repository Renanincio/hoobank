import React from "react";
import {
  FooterContainer,
  FooterContentBottom,
  FooterContentTop,
} from "./style";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContentTop>
          <div>
            <img src="/image/logo.svg" />
            <p>
              A new way to make the payments
              <br /> easy, reliable and secure.
            </p>
          </div>

          <ul>
            <h4>Usefull Links</h4>
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>

          <ul>
            <h4>Community</h4>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>

          <ul>
            <h4>Partner</h4>
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </FooterContentTop>
        <FooterContentBottom>
          <div>
            <p>Copyright &copy; 2021 Hoobank. All Rights Reserved.</p>
          </div>

          <ul>
            <li>
              <img src="/image/linkedin.svg" alt="logo linkedin" />
            </li>

            <li>
              <img src="/image/facebook.svg" alt="logo facebook" />
            </li>

            <li>
              <img src="/image/instagram.svg" alt="logo instagram" />
            </li>

            <li>
              <img src="/image/twitter.svg" alt="logo instagram" />
            </li>
          </ul>
        </FooterContentBottom>
      </FooterContainer>
    </>
  );
};
