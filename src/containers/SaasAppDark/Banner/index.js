import React from "react";
import { openModal, closeModal } from "@redq/reuse-modal";
import Container from "common/components/UI/Container";
import Text from "common/components/Text";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";
import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from "./banner.style";
import playIcon from "common/assets/image/saasAppDark/icons/play.svg";
import dashboard from "common/assets/image/saasAppDark/banner-dashboard.png";
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <Section id="home">
      <Container width="1300px">
        <BannerContentWrapper>
          <BannerContent>
            {/* Revolutionize Your Web Browsing with Summaries, Video Breakdowns, and Multilingual Capabilities */}
            <h2 className="animate__animated animate__fadeInUp">
              Revolutionize Your Web Browsing with Summaries, Video Breakdowns,
              and Multilingual Capabilities
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Experience the Ultimate Browsing Companion: Effortless Summarization, Video Insights, Seamless Translations & More at Your Fingertips!"
            />
            <Buttons>
              <Button
                colors="primary"
                title="Try now for free"
                className="button-one"
              />
              <button className="button-two" onClick={handleVideoModal}>
                <span className="play-icon">
                  <img src={playIcon?.src} alt="play Icon" />
                </span>
                <span className="btn-txt">
                  <span className="primary">Explore</span> Intro Video
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
