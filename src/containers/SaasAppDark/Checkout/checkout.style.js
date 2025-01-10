import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Section = styled.footer`
  padding-top: 120px;
  @media only screen and (max-width: 1440px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;