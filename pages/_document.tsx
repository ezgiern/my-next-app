// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <meta name="description" content="posteffect" />{" "}
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        ;
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
