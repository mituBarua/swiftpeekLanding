import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/saasAppDark";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AppDownload from "containers/SaasAppDark/FAQ";
import Banner from "containers/SaasAppDark/Banner";
import CallToAction from "containers/SaasAppDark/CallToAction";
import Clients from "containers/SaasAppDark/Clients";
import Footer from "containers/SaasAppDark/Footer";
import Monitoring from "containers/SaasAppDark/Monitoring";
import Navbar from "containers/SaasAppDark/Navbar";
import NewsFeed from "containers/SaasAppDark/NewsFeed";
import {
  ContentWrapper,
  GlobalStyle,
} from "containers/SaasAppDark/saasAppDark.style";
import Services from "containers/SaasAppDark/Services";
import StatsCounter from "containers/SaasAppDark/StatsCounter";
import Testimonials from "containers/SaasAppDark/Testimonials";
import VideoIntro from "containers/SaasAppDark/VideoIntro";

import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import LoginModal from "containers/SaasAppDark/LoginModal";
import FaqSection from "containers/SaasAppDark/FAQ";
import Pricing from "containers/SaasAppDark/Pricing";

const SaasAppDark = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Swiftpeek Web Summarizer</title>
          <meta
            name="Description"
            content="Swiftpeek Web Summarizer landing page"
          />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Sans:wght@400&family=Inter:wght@400;500;600&family=Manrope:wght@700&family=Noto+Serif+KR:wght@700;900&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Clients />
          <Services />
          <Monitoring />
          <StatsCounter />
          <VideoIntro />
          <Pricing />
          <Testimonials />
          <FaqSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppDark;
