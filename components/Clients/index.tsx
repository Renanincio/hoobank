import React from "react";
import { ClientsContainer, ClientsContent, ClientsHeader } from "./styles";

export const Clients = () => {
  return (
    <>
      <ClientsContainer id="clients">
        <ClientsHeader>
          <h1>
            What People are <br /> saying about us.
          </h1>

          <p>
            Everything you need to accept card payments
            <br /> and grow your business anywhere on the planet.
          </p>
        </ClientsHeader>

        <ClientsContent>
          <ul>
            <li>
              <div>
                <img src="/image/quotes.svg" />
                <p>
                  Money is only a tool. It will take you wherever you wish, but
                  it <br /> will not replace you as the
                  <br /> driver.
                </p>

                <div className="img">
                  <img src="/image/people01.png" />
                  <div>
                    <h4>Herman Jensen</h4>
                    <p>Founder & Leader</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <img src="/image/quotes.svg" />
                <p>
                  Money makes your life easier. if you're lucky to have it,
                  you're
                  <br /> lucky.
                </p>

                <div className="img">
                  <img src="/image/people02.png" />
                  <div>
                    <h4>Steve Mark</h4>
                    <p>Founder & Leader</p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <img src="/image/quotes.svg" />
                <p>
                  It is usually people in the
                  <br /> money business, finance, and
                  <br />
                  international trade that are
                  <br /> really rich.
                </p>

                <div className="img">
                  <img src="/image/people03.png" />
                  <div>
                    <h4>Kenn Gallagher</h4>
                    <p>Founder & Leader</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ClientsContent>
      </ClientsContainer>
    </>
  );
};
