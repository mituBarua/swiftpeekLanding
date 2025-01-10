import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const FaqSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 40px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 20px 0 40px 0;
  }

  .reusecore__accordion {
    max-width: 820px;
    margin: 0 auto;
    border: 1px solid ${themeGet('colors.inactiveIcon', '#ebebeb')};
    border-radius: 5px;
    box-shadow: 0px 0px 30px 0px rgba(25, 61, 101, 0.05);

    .accordion__item {
      border-top: 0;
      border-bottom: 1px solid ${themeGet('colors.inactiveIcon', '#ebebeb')};
      &:last-child {
        border-bottom: 0;
      }

      .accordion__header {
        padding: 20px 30px;
       h2{
        color:white;
       }
      }

      .accordion__body {
        padding: 5px 30px 20px;
        p{
          color:#d6d6d6;
        }
      }
    }
  }
`;
export const SectionHeading = styled.div`
  text-align: center;
  max-width: 710px;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media only screen and (max-width: 768px) {
      margin-bottom: 5px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-size: 38px;
    font-weight: 900;
    line-height: 55px;
    margin-bottom: 22px;
    @media only screen and (max-width: 991px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 820px) {
      font-size: 28px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.06;
    margin: 0 auto;
    max-width: 650px;
    @media only screen and (max-width: 667px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
  button {
    border-radius: 50px;
    margin-top: 40px;
    font-weight: 500;
    padding: 25px 27px;
    color: ${themeGet('colors.black')};
    .btn-icon {
      margin-left: 4px;
    }
    @media (max-width: 1023px) {
      padding: 20px 22px;
    }
    @media (max-width: 767px) {
      padding: 17px 18px;
      font-size: 13px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
`;
export default FaqSectionWrapper;
