import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://www.duncanritchie.co.uk/css/main.css" rel="stylesheet" key="main"/>
        <link href="https://www.duncanritchie.co.uk/css/subsites.css" rel="stylesheet" key="subsites"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
