import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Example: Loading Open Sans from Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
