import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      secondary: blue[50],
    }
  },
})

export default theme