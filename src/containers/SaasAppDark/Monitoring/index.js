import report1 from "common/assets/image/saasAppDark/summarizaiton.png";
import Button from "common/components/Button";
// import report2 from 'common/assets/image/saasAppDark/report2.png';
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import { monitoringFeatures } from "common/data/SaasAppDark";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";


import Section, {
  Content,
  FeatureList,
  FigureGroup,
  Grid,
} from "./monitoring.style";

import { openModal, closeModal } from "@redq/reuse-modal";
import MonitoringModal from "./MonitoringModal";

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Monitoring = () => {
  const handleVideoModal = () => {
    openModal({
      component: MonitoringModal,
      className:"montiring-modal",
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <Fade up>
            <NextImage src={report1} alt="report1" className="extensionImg"  />
          </Fade>

          <Content>
            <Text className="subtitle" content="Summarization" />
            <Heading content="Highlight & Simplify: Revolutionize Your Reading Experience with Instant Summaries and Bullet Points for Rapid Comprehension" />
            <Text
              className="description"
              content="While reading any content online, Use Swiftpeek Chrome / Firefox extension to get a quick summary powered by Chatgpt"
            />
            {/* <Button
              title="Summarize this Paragraph"
              onClick={handleVideoModal}
              className="button-one"
            /> */}
           
            <FeatureList>
              {monitoringFeatures?.map((feature) => (
                <div className="feature" key={feature.id}>
                  <figure className="icon">
                    <img src={feature?.icon?.src} alt="feature icon" />
                  </figure>
                  <div className="feature-content">
                    <Heading as="h4" content={feature.title} />
                    <Text content={feature.desc} />
                  </div>
                </div>
              ))}
            </FeatureList>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default Monitoring;
