import { Html, Head, Main, NextScript } from 'next/document'
import GlobalStyle from "@/styles/global";
import Layout_mainpage from "@/ui/components/layout/layout_mainpage";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
              <body>
            <Main />
        <NextScript />
      </body>
    </Html>
  )
}
