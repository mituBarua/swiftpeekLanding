import { closeModal, openModal } from '@redq/reuse-modal';
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import banner from 'common/assets/image/saasAppDark/video-banner.png';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { videoIntro } from 'common/data/SaasAppDark';
import Section, {
  FeatureItem, Figure, IntroFeatures, PlayButton, SectionHeading,
  VideoWrapper
} from './videoIntro.style';



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

const VideoIntro = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
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
  const { features } = videoIntro;

  return (
    <Section id="how-to-use-it">
      <Container width="1170px">
        <SectionHeading>
          <Text as="span" content="Search the web in any language" />
          <Heading content="Just search google as normal, but unlock the world of knowledge" />
          <Text content="When you search youtube, Our extension is able to also search youtube with the most used languages out there, Translate it back to you, You can gain new results never seen before" />
        </SectionHeading>
        <Figure>
          <img src={banner?.src} alt="video banner" />
          <PlayButton onClick={handleVideoModal}>
            <img src={playIcon?.src} alt="play Icon" />
          </PlayButton>
        </Figure>
        <IntroFeatures>
          {features.map((feature) => (
            <FeatureItem key={feature.id}>
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.2977L8.5611 18.8751L25 2.45244L22.6399 0.125L8.5611 14.1875L2.32739 7.95383L0 10.2977Z"
                  fill="#15E49E"
                />
              </svg>
              <div className='text'>
                <Heading as="h4" content={feature.title} />
                <Text content={feature.desc} />
              </div>
            </FeatureItem>
          ))}
        </IntroFeatures>
      </Container>
    </Section>
  );
};

export default VideoIntro;
