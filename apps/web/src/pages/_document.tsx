import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
