import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='sr scroll-smooth'>
      <Head>
        <title>Carolina Ríos</title>
        <link rel="shortcut icon" href='/favicon/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
