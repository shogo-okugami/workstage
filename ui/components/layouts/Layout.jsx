import * as React from 'react'
import Head from 'next/head';
import Header from '@/components/layouts/Header';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}))

const MainHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Main>
          <MainHeader />
          {children}
        </Main>
      </Box>
    </>
  )
}

export default Layout