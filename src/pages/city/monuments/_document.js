import { Html, Head, Main, NextScript } from 'next/document'
import GlobalStyle from "@/styles/global";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <GlobalStyle/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
