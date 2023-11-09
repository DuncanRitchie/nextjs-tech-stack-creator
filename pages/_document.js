import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://www.duncanritchie.co.uk/css/main.css" rel="stylesheet" key="main"/>
        <link href="https://www.duncanritchie.co.uk/css/subsites.css" rel="stylesheet" key="subsites"/>
    	  <link href="https://fonts.duncanritchie.co.uk/subsites.css" rel="stylesheet" key="fonts">
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
