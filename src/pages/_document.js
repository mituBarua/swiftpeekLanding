// ** React Import
import { Children } from 'react'


// ** Emotion Imports
import createEmotionServer from '@emotion/server/create-instance'

// ** Utils Imports
import { createEmotionCache } from '@core/utils/create-emotion-cache'


import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache)
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props}   emotionCache={cache} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map(style => {
        return (
          <style
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
          />
        )
      })

      return {
        ...initialProps,
        styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags,(<>{initialProps.styles}{sheet.getStyleElement()}</>)],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          {/* <link
            rel="icon"
            href="https://react-next-landing.redq.io/_next/static/images/favicon-ec2551afb2782a53fb493269d1ba4efe.png"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
