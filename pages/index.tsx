import { Collapse, Zoom, Stack, Typography, Slide } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FloatingBee from 'src/common/floatingBee'


const Home: NextPage = () => {
  const [ slide, setSlide ] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlide(true)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <Stack >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Stack position='relative'>
          <Box mt={2} alignSelf='center' >
            <Image src="/img/clubWithoutBee.svg" width={400} height={120} objectFit='contain' />
          </Box>
          <Box sx={{
            position: 'absolute',
            top: "60%",
            left: "50.6%",
            transform: "translate(-50%, -50%)"
          }}>
            <Slide in={slide} timeout={1000} >
              <Stack>
              <FloatingBee />
              </Stack>
            </Slide>
            
          </Box>
          <Typography variant="body2" sx={{
            fontWeight: 600
          }} width={400} mt={"-20px"} alignSelf='center' textAlign={'right'} >Sports news</Typography>
        </Stack>

      </main>

      <footer >
        
      </footer>
    </Stack>
  )
}

export default Home
