import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Text from "common/components/Text";
import { pricing } from "common/data/SaasAppDark";

import {
  Section,
  SectionHeading,
  ButtonGroup,
  Grid,
  PriceTable,
} from "./pricing.style";
import Link from "common/components/Link";
import { useRouter } from "next/router";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [hoverActive, setHoverActive] = useState(2);
  // const pricing = data.pricing;
  const router = useRouter()
  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  const handleClick = () => {
   
    router.push('/payment'); // Replace '/another-page' with the path of the page you want to navigate to
   
  }

  return (
    <Section id="pricing">
      <Container width="1400px">
        <SectionHeading>
          <Zoom>
            <Text as="span" className="subtitle" content="Pricing" />
            <Heading as="h2" content="Subscribe now to unlock full features" />
          </Zoom>
        </SectionHeading>

        {/* <ButtonGroup>
          <Zoom>
            <button
              className={isMonthly ? "active" : ""}
              type="button"
              onClick={handleToggle}
            >
              Monthly
            </button>
            <button
              className={!isMonthly ? "active" : ""}
              type="button"
              onClick={handleToggle}
            >
              Annual
            </button>
          </Zoom>
        </ButtonGroup> */}

        <Grid>
          {pricing.map((priceTable) => (
            <Fade key={priceTable.id} up delay={priceTable.id * 100}>
              <PriceTable
                className={
                  hoverActive === priceTable.id
                    ? "active animate__animated animate__fadeInUp"
                    : "animate__animated animate__fadeInUp"
                }
                onMouseOver={() => setHoverActive(priceTable.id)}
              >
                <Heading as="h4" content={priceTable.price.type} />

                {priceTable.desc?.map((descs) => (
                  <div className="list-style">
                    {" "}
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 25 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10.2977L8.5611 18.8751L25 2.45244L22.6399 0.125L8.5611 14.1875L2.32739 7.95383L0 10.2977Z"
                        fill="#15E49E"
                      />
                    </svg>
                    <Heading as="li" content={descs.list} />
                  </div>
                ))}

                <figure>
                  <Image src={priceTable.icon?.src} alt={priceTable.title} />
                </figure>

                <div className="a-link">
                  <a className="link" onClick={handleClick}>
                    {priceTable.button.label}
                  </a>
                  <a href={priceTable.details.link}>
                    {priceTable.details.label}
                    <Icon size={20} icon={ic_keyboard_arrow_right} />
                  </a>
                </div>
              </PriceTable>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Pricing;
