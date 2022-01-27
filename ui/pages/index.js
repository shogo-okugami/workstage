import Head from 'next/head'
import Header from '@/components/Header'
import { blue } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    blue: {
      main: blue[500],
    }
  },
})

theme = createTheme(theme,{
  components: {
    //Toolbar
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor:theme.palette.blue.main,
          [theme.breakpoints.up('md')]: {
            paddingLeft: 32,
            paddingRight: 32,
          },
          [theme.breakpoints.up('xl')]: {
            paddingLeft: 45,
            paddingRight: 45,
          }
        },
      }
    },
  }
})

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
    </ThemeProvider>
  )
}
export default Home
