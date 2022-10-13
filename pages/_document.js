import { Stack } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'
import { BeatLoader } from 'react-spinners'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body id='body' style={{
        height: '100vh',
        overflow: 'hidden'
      }}>
        <Stack justifyContent={'center'} alignItems={'center'}
          id='globalLoader'
          sx={{
            position: 'fixed',
            top: 0, left: 0,
            width: 1,
            bgcolor: 'white',
            height: '100vh',
            zIndex: 100000,
            transition: '.5s all'
          }}>
          <BeatLoader />
        </Stack>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}