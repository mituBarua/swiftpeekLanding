import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Section, { BGImage, SectionHeading } from './cta.style';

const VideoIntro = () => {
  return (
    <Section id="">
      <BGImage>
        <SectionHeading>
          <Text
            as="span"
            className="subtitle"
            content="How does our pricing model works"
          />
          <Heading content="Pay only for the words you send to process" />
          <Text content="We charge for our services + ChatGPT pricing per token" />
          <Button title="Check how our pricing works" icon={<Icon icon={arrowRight2} />} iconPosition="right" />
        </SectionHeading>
      </BGImage>
    </Section>
  );
};

export default VideoIntro;
