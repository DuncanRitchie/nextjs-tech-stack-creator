import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <Html>
      <Head>
        <link href="https://www.duncanritchie.co.uk/css/main.css" rel="stylesheet" key="main"/>
        <link href="https://www.duncanritchie.co.uk/velut-json-generator/main.css" rel="stylesheet" key="json-generator"/>
        {!isDev && <base href="https://duncan-tech-stacks.netlify.app/tech-stack-creator/"/>}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
