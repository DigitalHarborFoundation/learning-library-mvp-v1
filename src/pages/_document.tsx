import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Main,
  NextScript,
  Html,
} from "next/document";

const gaID = process.env.GA_TRACKING_ID;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="The Learning Library is a living and growing database of resources curated by Digital Harbor Foundation. Some of this content is made up of courses and lessons we’ve written, while others are collected from a broad community of makers and educators."
          />
          <meta property="og:title" content="Learning Library" key="ogtitle" />
          <meta
            property="og:description"
            content="The Learning Library is a living and growing database of resources curated by Digital Harbor Foundation. Some of this content is made up of courses and lessons we’ve written, while others are collected from a broad community of makers and educators."
            key="ogdesc"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
