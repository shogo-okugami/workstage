import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    blue: {
      main: blue[500],
    }
  },
})

export default theme